(this.webpackJsonpsmartsitecapital=this.webpackJsonpsmartsitecapital||[]).push([[0],{102:function(e,t){},121:function(e,t){},224:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),s=a(69),o=a.n(s),c=a(2),l=a.n(c),i=a(8),d=a(70),m=a.n(d),u={tronWeb:!1,contract:!1,setTronWeb(e){this.tronWeb=e},setContract(e,t){var a=this;return Object(i.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.contract().at(t);case 2:a.contract=n.sent;case 3:case"end":return n.stop()}}),n)})))()}},p="T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",w="TExwHCjZYbb7ToQUfQY5JgumwbcXAgeaVd",E="TT19i7wFc6cAgEKrEi4t5V3kHr8JHTT5fq";class v extends n.Component{constructor(e){super(e),this.state={min:10},this.deposit=this.deposit.bind(this),this.estado=this.estado.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,E);case 2:e.estado(),setInterval((()=>e.estado()),3e3);case 4:case"end":return t.stop()}}),t)})))()}estado(){return Object(i.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:t=e.sent,t=window.tronWeb.address.fromHex(t.address),a=t.substr(0,4),n=t.substr(-4),r=a+"..."+n,document.getElementById("login").innerHTML='<a href="https://tronscan.io/#/address/'+t+'" class="logibtn gradient-btn">'+r+"</a>";case 8:case"end":return e.stop()}}),e)})))()}deposit(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n,r,s,o,c,i,d,m,v,b,h,f,g,x,I;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.min,n=document.getElementById("amount").value,n=parseFloat(n),n=parseInt(1e6*n),t.next=6,window.tronWeb.trx.getAccount();case 6:return r=t.sent,r=window.tronWeb.address.fromHex(r.address),t.next=10,window.tronWeb;case 10:return s=t.sent,t.next=13,s.contract().at(w);case 13:return o=t.sent,t.next=16,o.approve(E,n).send();case 16:return t.next=18,o.allowance(r,E).call();case 18:if(c=t.sent,c=parseInt(c.remaining._hex),console.log(c),!(c>=n)){t.next=56;break}if(!((i=document.location.href).indexOf("?")>0)){t.next=40;break}for(d=i.split("?")[1],m=d.split("&"),v={},b=0,h=m.length;b<h;b++)f=m[b].split("="),v[f[0]]=unescape(decodeURI(f[1]));if(!v.ref){t.next=37;break}return f=v.ref.split("#"),t.next=32,u.contract.investors(f[0]).call();case 32:g=t.sent,console.log(g),g.registered?document.getElementById("sponsor").value=f[0]:document.getElementById("sponsor").value=p,t.next=38;break;case 37:document.getElementById("sponsor").value=p;case 38:t.next=41;break;case 40:document.getElementById("sponsor").value=p;case 41:return x=document.getElementById("sponsor").value,t.next=44,u.contract.investors(r).call();case 44:if((I=t.sent).registered&&(x=I.sponsor),!(n>=a)){t.next=52;break}return document.getElementById("amount").value="",t.next=50,u.contract.deposit(n,x).send();case 50:t.next=54;break;case 52:window.alert("Please enter an amount greater than 10 USDT"),document.getElementById("amount").value=10;case 54:t.next=57;break;case 56:n>10&&c>10?n>c?c<=0?(document.getElementById("amount").value=10,window.alert("You do not have enough funds in your account you place at least 10 USDT")):(document.getElementById("amount").value=10,window.alert("You must leave 50 TRX free in your account to make the transaction")):(document.getElementById("amount").value=n,window.alert("You must leave 50 TRX free in your account to make the transaction")):window.alert("You do not have enough funds in your account you place at least 250 TRX");case 57:case"end":return t.stop()}}),t)})))()}render(){var e=this.state.min;return e="Minimo. "+e+" SITE",r.a.createElement("div",{className:"card wow bounceInUp text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Contrato V 1.0"),r.a.createElement("h6",{className:"card-text"},"Retorno: ",r.a.createElement("strong",null,"115%"),r.a.createElement("br",null),"Tiempo: ",r.a.createElement("strong",null,"90 dias"),r.a.createElement("br",null)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"number",className:"form-control mb-20 text-center",id:"amount",placeholder:e}),r.a.createElement("p",{className:"card-text"},"Debes de tener ~ 50 TRX para hacer la transacci\xf3n"),r.a.createElement("a",{href:"#amount",className:"btn btn-light",onClick:()=>this.deposit()},"Depositar"))))}}class b extends n.Component{constructor(e){super(e),this.state={totalInvestors:0,totalInvested:0,totalRefRewards:0},this.totalInvestors=this.totalInvestors.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,E);case 2:setInterval((()=>e.totalInvestors()),1e3);case 3:case"end":return t.stop()}}),t)})))()}totalInvestors(){var e=this;return Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.contract.setstate().call();case 2:a=t.sent,e.setState({totalInvestors:parseInt(a.Investors._hex),totalInvested:parseInt(a.Invested._hex)/1e6,totalRefRewards:parseInt(a.RefRewards._hex)/1e6});case 4:case"end":return t.stop()}}),t)})))()}render(){var e=this.state,t=e.totalInvestors,a=e.totalInvested,n=e.totalRefRewards;return r.a.createElement("div",{className:"row counters"},r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},t),r.a.createElement("p",null,"Inversores Globales")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},a," SITE"),r.a.createElement("p",null,"Invertido en Plataforma")),r.a.createElement("div",{className:"col-lg-4 col-12 text-center"},r.a.createElement("span",{"data-toggle":"counter-up"},n," SITE"),r.a.createElement("p",null,"Total Recompensas por Referidos")))}}var h=a(74);class f extends n.Component{constructor(e){super(e),this.state={direccion:"",link:"Haz una inversi\xf3n para obtener el LINK de referido",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0},this.Investors=this.Investors.bind(this),this.Link=this.Link.bind(this),this.withdraw=this.withdraw.bind(this)}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.setContract(window.tronWeb,E);case 2:setInterval((()=>e.Investors()),500),setInterval((()=>e.Link()),1e3);case 4:case"end":return t.stop()}}),t)})))()}Link(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.registered){t.next=12;break}return(a=document.location.href).indexOf("?")>0&&(a=a.split("?")[0]),t.next=6,window.tronWeb.trx.getAccount();case 6:n=t.sent,n=window.tronWeb.address.fromHex(n.address),n=a+"?ref="+n,e.setState({link:n}),t.next=13;break;case 12:e.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return t.stop()}}),t)})))()}Investors(){var e=this;return Object(i.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.tronWeb.trx.getAccount();case 2:return a=t.sent,t.next=5,u.contract.investors(a.address).call();case 5:return n=t.sent,t.next=8,u.contract.MYwithdrawable().call();case 8:r=t.sent,e.setState({direccion:window.tronWeb.address.fromHex(a.address),registered:n.registered,balanceRef:parseInt(n.balanceRef._hex)/1e6,totalRef:parseInt(n.totalRef._hex)/1e6,invested:parseInt(n.invested._hex)/1e6,paidAt:parseInt(n.paidAt._hex)/1e6,my:parseInt(r.amount._hex)/1e6,withdrawn:parseInt(n.withdrawn._hex)/1e6});case 10:case"end":return t.stop()}}),t)})))()}withdraw(){return Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.contract.withdraw().send();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))()}render(){var e=this.state,t=e.balanceRef,a=e.totalRef,n=e.invested,s=e.withdrawn,o=e.my,c=e.direccion,l=e.link,i=t+o;return i=i.toFixed(6),i=parseFloat(i),t=t.toFixed(2),t=parseFloat(t),a=a.toFixed(2),a=parseFloat(a),n=n.toFixed(2),n=parseFloat(n),s=s.toFixed(2),s=parseFloat(s),o=o.toFixed(6),o=parseFloat(o),r.a.createElement("div",{className:"container"},r.a.createElement("header",{style:{"text-align":"center"},className:"section-header"},r.a.createElement("h3",{className:"white"},r.a.createElement("span",{style:{"font-weight":"bold"}},"Mi Oficina:")," ",r.a.createElement("br",null),r.a.createElement("span",{style:{"font-size":"11px"}},c)),r.a.createElement("br",null),r.a.createElement("h3",{className:"white",style:{"font-weight":"bold"}},"Link de referido:"),r.a.createElement("h6",{className:"white",style:{padding:"1.5em",fontSize:"11px"}},r.a.createElement("a",{href:l},l)," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.CopyToClipboard,{text:l},r.a.createElement("button",{type:"button",className:"btn btn-info"},"COPIAR"))),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-analytics-outline",style:{color:"#ff689b"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},n," SITE")),r.a.createElement("p",{className:"description"},"Total invertido"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-bookmarks-outline",style:{color:"#e9bf06"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},a," SITE")),r.a.createElement("p",{className:"description"},"Total ganancias por referidos"))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Mi balance"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},o," SITE")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-paper-outline",style:{color:"#3fcdc7"}})),r.a.createElement("p",{className:"description"},"Balance por referidos"),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"}," ",t," SITE")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 offset-lg-1 wow bounceInUp","data-wow-delay":"0.1s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-speedometer-outline",style:{color:"#41cf2e"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Disponible")),r.a.createElement("p",{className:"description"},i," SITE ",r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:()=>this.withdraw()},"Retirar")))),r.a.createElement("div",{className:"col-md-6 col-lg-5 wow bounceInUp","data-wow-delay":"0.2s","data-wow-duration":"1.4s"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:"ion-ios-clock-outline",style:{color:"#4680ff"}})),r.a.createElement("h4",{className:"title"},r.a.createElement("a",{href:"#services"},"Retirado")),r.a.createElement("p",{className:"description"},s," SITE")))))}}var g=a(75),x=a.n(g),I="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",N=r.a.createElement("div",{className:"col-sm-4 text-center"},r.a.createElement("img",{src:x.a,className:"img-fluid",alt:"TronLink logo"})),k=()=>{window.open(I,"_blank")},y=e=>{var t=e.installed;return void 0!==t&&t?r.a.createElement(r.a.Fragment,null," ",r.a.createElement("a",{href:"/"},r.a.createElement("div",{className:"tronLink row",style:{padding:"3em",color:"black","text-decoration":"none"}},r.a.createElement("div",{className:"info col-sm-8"},r.a.createElement("h1",null,"Requiere Iniciar Sesi\xf3n"),r.a.createElement("p",null,"TronLink est\xe1 instalado pero inicia sesion primero. Abre TronLink en la barra del nabegador y configura tu primer wallet o desbloquea una wallet ya creada.")),N))):r.a.createElement("div",{className:"row",onClick:k},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h1",null,"Instalar TronLink"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink es una wallet de TRON que puede descargar en ",r.a.createElement("a",{href:I,target:"_blank",rel:"noopener noreferrer"},"Chrome Webstore"),". Una vez instalado, vuelva y refresque la pagina.")),N)},W="TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg";class T extends n.Component{constructor(e){super(e),this.state={tronWeb:{installed:!1,loggedIn:!1}}}componentDidMount(){var e=this;return Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((t=>{var a={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(a.installed)return e.setState({tronWeb:a}),t();var n=0,r=setInterval((()=>{if(n>=10){var s="https://api.trongrid.io";return window.tronWeb=new m.a(s,s,s),e.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),t()}if(a.installed=!!window.tronWeb,a.loggedIn=window.tronWeb&&window.tronWeb.ready,!a.installed)return n++;e.setState({tronWeb:a}),t()}),100)}));case 2:e.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex(W),base58:W},window.tronWeb.on("addressChange",(()=>{e.state.tronWeb.loggedIn||e.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),u.setTronWeb(window.tronWeb);case 4:case"end":return t.stop()}}),t)})))()}render(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("section",{id:"why-us",className:"wow fadeIn"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"section-header"},r.a.createElement("h3",null,"Has tu inversi\xf3n")),r.a.createElement("div",{className:"row row-eq-height justify-content-center"},r.a.createElement(v,null)),r.a.createElement("div",null,r.a.createElement(b,null)))),r.a.createElement("section",{id:"services",className:"section-bg"},r.a.createElement(f,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(y,{installed:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(y,null)))}}var R=T,S=document.getElementById("root");o.a.render(r.a.createElement(R,null),S)},75:function(e,t,a){e.exports=a.p+"static/media/TronLinkLogo.d3a8f115.png"},78:function(e,t,a){e.exports=a(224)}},[[78,1,2]]]);
//# sourceMappingURL=main.3a969c11.chunk.js.map