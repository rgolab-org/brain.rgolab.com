import{a1 as i,v as s,a2 as c,a3 as l,a4 as f,a5 as d,a6 as m,a7 as h,a8 as A,a9 as g,aa as v,ab as y,ac as P,d as w,u as C,j as R,z as _,ad as b,ae as D,af as E}from"./chunks/framework.QTVU6t_u.js";import{t as p}from"./chunks/theme.yTaQLlOF.js";const L={extends:p,Layout:()=>i(p.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function u(e){if(e.extends){const a=u(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=u(L),T=w({name:"VitePressApp",setup(){const{site:e}=C();return R(()=>{_(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&b(),D(),E(),o.setup&&o.setup(),()=>i(o.Layout)}});async function j(){const e=O(),a=x();a.provide(l,e);const t=f(e.route);return a.provide(d,t),a.component("Content",m),a.component("ClientOnly",h),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:A}),{app:a,router:e,data:t}}function x(){return g(T)}function O(){let e=s,a;return v(t=>{let n=y(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),__vite__mapDeps([]))),s&&(e=!1),r},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{j as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}