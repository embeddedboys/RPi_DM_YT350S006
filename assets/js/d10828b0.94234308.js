"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[186],{8016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>_,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"benchmark/lv_demo_benchmark","title":"LVGL Benchmark","description":"","source":"@site/docs/benchmark/lv_demo_benchmark.md","sourceDirName":"benchmark","slug":"/benchmark/lv_demo_benchmark","permalink":"/RPi_DM_YT350S006/docs/benchmark/lv_demo_benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/benchmark/lv_demo_benchmark.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"LVGL Benchmark","description":"","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"fbmark","permalink":"/RPi_DM_YT350S006/docs/benchmark/fbmark"},"next":{"title":"\u6210\u7ee9\u5bf9\u6bd4","permalink":"/RPi_DM_YT350S006/docs/benchmark/comapre"}}');var o=t(4848),c=t(8453);const s={title:"LVGL Benchmark",description:"",sidebar_position:3},i=void 0,a={},d=[];function m(e){const n={code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://gitee.com/embeddedboys/lv_port_linux\ncd lv_port_linux\ngit checkout release/v8.2\ngit submodule update --init\n\n# \u4fee\u6539 lv_conf.h\n#define LV_COLOR_DEPTH 16\n#define LV_FONT_MONTSERRAT_12 1\n#define LV_FONT_MONTSERRAT_16 1\n#define LV_USE_DEMO_BENCHMARK   1\n#define LV_USE_DEMO_MUSIC       1\n# define LV_DEMO_MUSIC_AUTO_PLAY    1\n\n# \u4fee\u6539 main.c\ndisp_drv.hor_res    = 480;\ndisp_drv.ver_res    = 320;\n\nmake -j$(nproc)\n"})}),"\n",(0,o.jsx)(n.p,{children:"| \u6d4b\u8bd5\u9879 | \u6210\u7ee9 | \u5355\u4f4d |\n| lv_demo_benchmark |"})]})}function _(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);