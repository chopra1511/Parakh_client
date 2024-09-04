import{r as f,u as b,a as q,b as z,g as L,c as v,d as g,j as e,e as $,f as G,h as H,p as K,i as Q}from"./index-aFSO_JsO.js";/* empty css            */import{A as X}from"./AddressFormModal-CwrDJpty.js";import{N as Y,F as J}from"./FooterNav-CODXy9J_.js";import{u as W,a as Z,B as ee}from"./Button-Cs-V_oQq.js";import{I as h}from"./IconButton-DBsuof-7.js";import"./ButtonBase-DzxoY9VM.js";var S="https://sdk.cashfree.com/js/v3/cashfree.js",se=/^https:\/\/sdk\.cashfree\.com\/js\/v3\/?(\?.*)?$/,P="load was called but an existing Cashfree.js script already exists in the document; existing script parameters will be used",te=function(){for(var i=document.querySelectorAll('script[src^="'.concat(S,'"]')),a=0;a<i.length;a++){var t=i[a];if(se.test(t.src))return t}return null},ae=function(i){var a="",t=document.createElement("script");t.src="".concat(S).concat(a);var l=document.head||document.body;if(!l)throw new Error("Expected document.body not to be null. Cashfree.js requires a <body> element.");return l.appendChild(t),t},p=null,ie=function(i){return p!==null||(p=new Promise(function(a,t){if(typeof window>"u"||typeof document>"u"){a(null);return}if(window.Cashfree&&i&&console.warn(P),window.Cashfree){a(window.Cashfree);return}try{var l=te();l&&i?console.warn(P):l||(l=ae(i)),l.addEventListener("load",function(){window.Cashfree?a(window.Cashfree):t(new Error("Cashfree.js not available"))}),l.addEventListener("error",function(){t(new Error("Failed to load Cashfree.js"))})}catch(u){t(u);return}})),p},le=function(i,a,t){if(i===null)return null;var l=i.apply(void 0,a);return l},A=Promise.resolve().then(function(){return ie(null)}),E=!1;A.catch(function(o){E||console.warn(o)});var ne=async function(){for(var i=arguments.length,a=new Array(i),t=0;t<i;t++)a[t]=arguments[t];E=!0;const l=await A;return le(l,a)};let C;const he=()=>{const[o,i]=f.useState(!1),[a,t]=f.useState(!1),[l,u]=f.useState(0),{cart:c,billDetails:x}=b(s=>s.cart),{addresses:m}=b(s=>s.address),{user:r}=b(s=>s.user),[N,k]=f.useState(null),I=q(),d=z();f.useEffect(()=>{r||d(L()),(!c||c.length===0)&&d(v()),(!m||m.length===0)&&d(g())},[d,r,c,m]);const _={cart:c,amount:x.toPay,customer:{name:r==null?void 0:r.user.name,email:r==null?void 0:r.user.email,contact:r==null?void 0:r.user.contact,address:N}},D=s=>{d($(s)).then(()=>{d(g())}).catch(n=>console.log(n))},F=s=>{u(s),k(m[s])},w=()=>{i(!o)},T=()=>{t(!0)},B=()=>{t(!1)},M=s=>{d(G(s)).then(()=>{d(v())}).catch(n=>{console.log(n)})};f.useEffect(()=>{(async()=>{C=await ne({mode:"sandbox"})})()},[]);const O=async s=>{s.preventDefault();try{const n=await d(H(_)).unwrap(),U={paymentSessionId:n.payment_session_id,redirectTarget:"_modal"};await C.checkout(U),console.log("Payment Initiated");const y=await d(K(n.order_id)).unwrap();y.payment_status==="SUCCESS"?(await d(Q()).then(()=>{d(v())}).catch(V=>{console.log(V)}),I("/Parakh_client/thankyou"),console.log("Payment Completed")):console.log("Payment verification failed:",y)}catch(n){console.log(n)}},R=W(),j=Z(R.breakpoints.down("sm"));return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed top-0 right-0 left-0 z-10",children:e.jsx(Y,{cart:c})}),e.jsxs("div",{className:"py-20 bg-[#f4f4f4]",children:[e.jsx("div",{className:"px-5 pb-10",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsx("div",{className:"pb-3 border-b-2 w-full",children:e.jsx("h1",{className:"text-xl md:text-3xl font-Poppins font-semibold",children:"Items"})})}),e.jsx("div",{className:"my-5 md:my-10",children:c.map((s,n)=>e.jsxs("div",{className:"flex gap-5 py-5",children:[e.jsx("div",{className:"p-2 bg-white w-28 md:w-28 drop-shadow",children:e.jsx("div",{className:"w-18 h-14 md:h-20  flex justify-center items-center bg-gray-100 overflow-hidden",children:e.jsx("img",{src:s.product.images,alt:"",className:"w-full"})})}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-base md:text-xl font-Poppins font-semibold",children:s.product.name}),e.jsxs("h1",{className:"text-[10px] md:text-[12px] font-Poppins font-medium capitalize",children:[s.product.variant.color,",",s.product.variant.material]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("h1",{className:"text-sm md:text-lg font-Poppins font-semibold md:mt-2",children:["₹",s.totalPrice,s.totalDiscount?e.jsxs("span",{className:"pl-2 line-through text-slate-600 text-[12px]",children:["₹",s.totalDiscount]}):""]}),e.jsx("div",{className:"",children:e.jsx(h,{onClick:()=>{M(s.product._id)},children:e.jsx("i",{className:"fi fi-rs-trash text-xl pt-1 px-2 hover:text-[#f2707f]"})})})]})]}),e.jsx("div",{className:"",children:e.jsx("div",{className:" flex justify-start items-center",children:e.jsxs("h1",{className:"text-[12px] md:text-lg font-Poppins font-medium",children:["Quantity :"," ",e.jsx("span",{className:"font-semibold",children:s.quantity})]})})})]})]},n))})]})}),e.jsx("div",{className:"px-5",id:"detailedBill",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsx("div",{className:"pb-3 border-b-2 w-full",children:e.jsx("h1",{className:"text-xl md:text-3xl font-Poppins font-semibold",children:"Order Summary"})})}),e.jsxs("div",{children:[e.jsxs("div",{className:"py-3 border-b-[1px] md:border-b-2 border-dashed",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Order total"}),e.jsxs("h1",{className:"text-sm md:text-md font-Poppins font-medium",children:["₹",x.cartTotal]})]}),e.jsxs("div",{className:"flex justify-between mt-2",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Discount"}),e.jsxs("h1",{className:"text-sm md:text-md font-Poppins font-medium",children:["₹",x.discount]})]})]}),e.jsx("div",{className:"py-3 border-b-[1px] md:border-b-2 border-dashed",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Subtotal"}),e.jsxs("h1",{className:"text-sm md:text-md font-Poppins font-medium",children:["₹",x.subTotal]})]})}),e.jsx("div",{className:"pt-5 pb-10 border-b-[1px] md:border-b-2 border-dashed",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-sm md:text-md font-Poppins",children:"Delivery Fee"}),e.jsxs("h1",{className:"text-sm md:text-md font-Poppins font-medium",children:["₹",x.delivery]})]})}),e.jsx("div",{className:"pt-3",children:e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h1",{className:"text-md md:text-lg font-Poppins font-semibold",children:"To Pay"}),e.jsxs("h1",{className:"text-md md:text-lg font-Poppins font-bold",children:["₹",x.toPay]})]})})]})]})}),e.jsx("div",{className:"px-5 py-10",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsx("div",{className:"pb-3 w-full",children:e.jsx("h1",{className:"md:text-xl font-Poppins font-semibold",children:"Cancellation Policy"})})}),e.jsx("div",{children:e.jsxs("ul",{children:[e.jsxs("li",{className:"flex gap-3 items-center leading-loose",children:[e.jsx("i",{className:"fi fi-ts-feather-pointed pt-1 text-[#f2707f]"}),e.jsx("h1",{className:"text-[12px] md:text-base font-Poppins",children:"Full refund if order is cancelled before confirmation"})]}),e.jsxs("li",{className:"flex gap-3 items-center leading-loose",children:[e.jsx("i",{className:"fi fi-ts-feather-pointed pt-1 text-[#f2707f]"}),e.jsx("h1",{className:"text-[12px] md:text-base font-Poppins",children:"No refund if the order is already accepted or dispatched"})]}),e.jsxs("li",{className:"flex gap-3 items-center leading-loose",children:[e.jsx("i",{className:"fi fi-ts-feather-pointed pt-1 text-[#f2707f]"}),e.jsx("h1",{className:"text-[12px] md:text-base font-Poppins",children:"For any queries on cancellation, please contact us"})]})]})})]})}),e.jsx("div",{className:"px-5 pb-10",children:e.jsxs("div",{className:"md:mx-20 p-5 md:p-10 bg-white rounded-2xl drop-shadow-xl",children:[e.jsx("div",{className:"flex justify-start text-left",children:e.jsxs("div",{className:"pb-3 w-full flex items-center justify-between",children:[e.jsx("h1",{className:"md:text-xl font-Poppins font-semibold",children:"Select Your Address"}),m.length>1&&e.jsx(h,{onClick:w,children:e.jsx("i",{className:`fi fi-rr-caret-${o?"up":"down"} text-base md:text-2xl px-2 pt-1 text-[#f2707f]`})})]})}),e.jsx("div",{className:"pb-5 border-b-[1px] md:border-b-2 border-dashed",children:e.jsxs("div",{children:[m.map((s,n)=>e.jsxs("div",{className:`flex justify-between items-center ${n!==l&&!o?"hidden":""}`,children:[e.jsxs("div",{className:"flex items-center gap-3 overflow-hidden",children:[e.jsx("input",{type:"radio",name:"address",className:"custom-radio flex-shrink-0",required:!0,onChange:()=>F(n),onClick:w}),e.jsxs("h1",{className:"text-[12px] md:text-base font-Poppins overflow-hidden text-ellipsis whitespace-nowrap",children:[s.name,", ",s.address,", ",s.pincode,","," ",s.city,", ",s.state]})]}),e.jsxs("div",{className:"flex",children:[e.jsx(h,{children:e.jsx("i",{className:"fi fi-rr-edit text-base px-2 pt-1 hover:text-[#f2707f]"})}),e.jsx(h,{onClick:()=>{D(s._id)},children:e.jsx("i",{className:"fi fi-rs-trash text-base px-2 pt-1 hover:text-[#f2707f]"})})]})]},n)),e.jsxs("div",{className:"flex items-center cursor-pointer",children:[e.jsx(h,{onClick:T,children:e.jsx("i",{className:"fi fi-rr-square-plus text-base px-2 pt-1 text-[#f2707f]"})}),e.jsx("h1",{className:"text-sm md:text-base text-[#f2707f] font-Poppins font-medium underline underline-offset-4 decoration-dashed",children:"Add new address"})]})]})}),e.jsxs("div",{className:"mt-10 flex justify-between items-center",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"text-lg md:text-2xl font-Poppins font-bold",children:["₹",x.toPay]}),e.jsx("a",{href:"#detailedBill",children:e.jsx("h1",{className:"text-[10px] md:text-sm font-Poppins text-[#f2707f] cursor-pointer",children:"View Detailed Bill"})})]}),e.jsx("div",{children:e.jsx(ee,{variant:"contained",size:"large",type:"submit",disabled:!N,onClick:O,className:"button-shiny-effect",sx:{borderRadius:j?"5px":"10px",fontFamily:"Poppins",textTransform:"capitalize",backgroundColor:"#f2707f",fontSize:j?"12px":"16px",padding:j?"8px 16px":"12px 24px",":hover":{backgroundColor:"#F7475C"}},children:"Proceed to payment"})})]})]})}),e.jsx(X,{isVisible:a,onClose:B})]}),e.jsx("div",{className:"fixed bottom-0 right-0 left-0 xl:hidden drop-shadow-[0_15px_40px_rgba(0,0,0,0.25)]",children:e.jsx(J,{cart:c})})]})};export{he as default};
