(window.webpackJsonp=window.webpackJsonp||[]).push([[16,71],{128:function(n,e,t){var o=t(36),r=t(133),i=t(134),c=t(27),a=t(60),u=t(130),s={},l={};(e=n.exports=function(n,e,t,h,f){var p,d,v,m,b=f?function(){return n}:u(n),C=o(t,h,e?2:1),x=0;if("function"!=typeof b)throw TypeError(n+" is not iterable!");if(i(b)){for(p=a(n.length);p>x;x++)if((m=e?C(c(d=n[x])[0],d[1]):C(n[x]))===s||m===l)return m}else for(v=b.call(n);!(d=v.next()).done;)if((m=r(v,C,d.value,e))===s||m===l)return m}).BREAK=s,e.RETURN=l},22:function(n,e,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)n.push(o);else if(Array.isArray(o)&&o.length){var c=r.apply(null,o);c&&n.push(c)}else if("object"===i)for(var a in o)t.call(o,a)&&o[a]&&n.push(a)}}return n.join(" ")}void 0!==n&&n.exports?(r.default=r,n.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(n.exports=o)}()},225:function(n,e,t){var o=t(23);n.exports=function(n,e,t){for(var r in e)t&&n[r]?n[r]=e[r]:o(n,r,e[r]);return n}},226:function(n,e){n.exports=function(n,e,t,o){if(!(n instanceof e)||void 0!==o&&o in n)throw TypeError(t+": incorrect invocation!");return n}},227:function(n,e,t){var o=t(21);n.exports=function(n,e){if(!o(n)||n._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return n}},242:function(n,e,t){"use strict";t(241),t(248)},243:function(n,e,t){"use strict";var o=t(17),r=t(8),i=t(16),c=t(18),a=t(12)("species");n.exports=function(n){var e="function"==typeof r[n]?r[n]:o[n];c&&e&&!e[a]&&i.f(e,a,{configurable:!0,get:function(){return this}})}},244:function(n,e,t){var o=t(36),r=t(93),i=t(37),c=t(60),a=t(245);n.exports=function(n,e){var t=1==n,u=2==n,s=3==n,l=4==n,h=6==n,f=5==n||h,p=e||a;return function(e,a,d){for(var v,m,b=i(e),C=r(b),x=o(a,d,3),k=c(C.length),y=0,g=t?p(e,k):u?p(e,0):void 0;k>y;y++)if((f||y in C)&&(m=x(v=C[y],y,b),n))if(t)g[y]=m;else if(m)switch(n){case 3:return!0;case 5:return v;case 6:return y;case 2:g.push(v)}else if(l)return!1;return h?-1:s||l?l:g}}},245:function(n,e,t){var o=t(246);n.exports=function(n,e){return new(o(n))(e)}},246:function(n,e,t){var o=t(21),r=t(136),i=t(12)("species");n.exports=function(n){var e;return r(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),o(e)&&null===(e=e[i])&&(e=void 0)),void 0===e?Array:e}},247:function(n,e,t){var o=t(128);n.exports=function(n,e){var t=[];return o(n,!1,t.push,t,e),t}},249:function(n,e,t){"use strict";var o=t(16).f,r=t(56),i=t(225),c=t(36),a=t(226),u=t(128),s=t(88),l=t(135),h=t(243),f=t(18),p=t(92).fastKey,d=t(227),v=f?"_s":"size",m=function(n,e){var t,o=p(e);if("F"!==o)return n._i[o];for(t=n._f;t;t=t.n)if(t.k==e)return t};n.exports={getConstructor:function(n,e,t,s){var l=n(function(n,o){a(n,l,e,"_i"),n._t=e,n._i=r(null),n._f=void 0,n._l=void 0,n[v]=0,void 0!=o&&u(o,t,n[s],n)});return i(l.prototype,{clear:function(){for(var n=d(this,e),t=n._i,o=n._f;o;o=o.n)o.r=!0,o.p&&(o.p=o.p.n=void 0),delete t[o.i];n._f=n._l=void 0,n[v]=0},delete:function(n){var t=d(this,e),o=m(t,n);if(o){var r=o.n,i=o.p;delete t._i[o.i],o.r=!0,i&&(i.n=r),r&&(r.p=i),t._f==o&&(t._f=r),t._l==o&&(t._l=i),t[v]--}return!!o},forEach:function(n){d(this,e);for(var t,o=c(n,arguments.length>1?arguments[1]:void 0,3);t=t?t.n:this._f;)for(o(t.v,t.k,this);t&&t.r;)t=t.p},has:function(n){return!!m(d(this,e),n)}}),f&&o(l.prototype,"size",{get:function(){return d(this,e)[v]}}),l},def:function(n,e,t){var o,r,i=m(n,e);return i?i.v=t:(n._l=i={i:r=p(e,!0),k:e,v:t,p:o=n._l,n:void 0,r:!1},n._f||(n._f=i),o&&(o.n=i),n[v]++,"F"!==r&&(n._i[r]=i)),n},getEntry:m,setStrong:function(n,e,t){s(n,e,function(n,t){this._t=d(n,e),this._k=t,this._l=void 0},function(){for(var n=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?l(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(this._t=void 0,l(1))},t?"entries":"values",!t,!0),h(e)}}},250:function(n,e,t){"use strict";var o=t(17),r=t(15),i=t(92),c=t(28),a=t(23),u=t(225),s=t(128),l=t(226),h=t(21),f=t(57),p=t(16).f,d=t(244)(0),v=t(18);n.exports=function(n,e,t,m,b,C){var x=o[n],k=x,y=b?"set":"add",g=k&&k.prototype,_={};return v&&"function"==typeof k&&(C||g.forEach&&!c(function(){(new k).entries().next()}))?(k=e(function(e,t){l(e,k,n,"_c"),e._c=new x,void 0!=t&&s(t,b,e[y],e)}),d("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(n){var e="add"==n||"set"==n;n in g&&(!C||"clear"!=n)&&a(k.prototype,n,function(t,o){if(l(this,k,n),!e&&C&&!h(t))return"get"==n&&void 0;var r=this._c[n](0===t?0:t,o);return e?this:r})}),C||p(k.prototype,"size",{get:function(){return this._c.size}})):(k=m.getConstructor(e,n,b,y),u(k.prototype,t),i.NEED=!0),f(k,n),_[n]=k,r(r.G+r.W+r.F,_),C||m.setStrong(k,n,b),k}},251:function(n,e,t){var o=t(131),r=t(247);n.exports=function(n){return function(){if(o(this)!=n)throw TypeError(n+"#toJSON isn't generic");return r(this)}}},252:function(n,e,t){"use strict";var o=t(15);n.exports=function(n){o(o.S,n,{of:function(){for(var n=arguments.length,e=new Array(n);n--;)e[n]=arguments[n];return new this(e)}})}},253:function(n,e,t){"use strict";var o=t(15),r=t(132),i=t(36),c=t(128);n.exports=function(n){o(o.S,n,{from:function(n){var e,t,o,a,u=arguments[1];return r(this),(e=void 0!==u)&&r(u),void 0==n?new this:(t=[],e?(o=0,a=i(u,arguments[2],2),c(n,!1,function(n){t.push(a(n,o++))})):c(n,!1,t.push,t),new this(t))}})}},341:function(n,e,t){"use strict";t.r(e);var o=t(4),r=t.n(o),i=t(5),c=t.n(i),a=t(2),u=t.n(a),s=t(6),l=t.n(s),h=t(412),f=(t(471),function(n){function e(){var n,o,i,a;c()(this,e);for(var s=arguments.length,l=Array(s),h=0;h<s;h++)l[h]=arguments[h];return o=i=u()(this,(n=e.__proto__||r()(e)).call.apply(n,[this].concat(l))),i.document=function(){return{document:t(424),className:"checkbox-page"}},a=o,u()(i,a)}return l()(e,n),e}(h.a));e.default=f},401:function(n,e,t){"use strict";t(241),t(329)},402:function(n,e,t){"use strict";var o=t(4),r=t.n(o),i=t(5),c=t.n(i),a=t(7),u=t.n(a),s=t(2),l=t.n(s),h=t(6),f=t.n(h),p=t(0),d=t.n(p),v=t(22),m=t.n(v),b=function(n){function e(){return c()(this,e),l()(this,(e.__proto__||r()(e)).apply(this,arguments))}return f()(e,n),u()(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,o=n.titleRender,r=n.moreRender,i=n.children,c=m()(""+e,t);return d.a.createElement("div",{className:c},d.a.createElement("div",{className:e+"-header"},o&&d.a.createElement("div",{className:e+"-title"},o),r&&d.a.createElement("div",{className:e+"-more"},r)),d.a.createElement("div",{className:e+"-body"},i))}}]),e}(p.PureComponent);e.a=b,b.defaultProps={prefixCls:"za-panel"}},403:function(n,e,t){"use strict";var o=t(42),r=t.n(o),i=t(4),c=t.n(i),a=t(5),u=t.n(a),s=t(7),l=t.n(s),h=t(2),f=t.n(h),p=t(6),d=t.n(p),v=t(0),m=t.n(v),b=t(22),C=t.n(b),x=(t(330),function(n){function e(){return u()(this,e),f()(this,(e.__proto__||c()(e)).apply(this,arguments))}return d()(e,n),l()(e,[{key:"componentDidMount",value:function(){if("index-page"===this.props.className){var n=window.sessionStorage[this.props.className];n&&(this.container.scrollTop=n)}}},{key:"componentWillUnmount",value:function(){if("index-page"===this.props.className){var n=this.container.scrollTop;window.sessionStorage[this.props.className]=n}}},{key:"render",value:function(){var n=this,e=this.props,t=e.className,o=e.children,i=C()(r()({"app-container":!0},t,!!t));return m.a.createElement("div",{ref:function(e){n.container=e},className:i},m.a.createElement("a",{className:"github",href:"https://github.com/ZhonganTechENG/zarm"},m.a.createElement("svg",{"aria-hidden":"true",version:"1.1",viewBox:"0 0 16 16"},m.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),o)}}]),e}(v.Component));e.a=x},404:function(n,e,t){"use strict";var o=t(4),r=t.n(o),i=t(5),c=t.n(i),a=t(7),u=t.n(a),s=t(2),l=t.n(s),h=t(6),f=t.n(h),p=t(0),d=t.n(p),v=(t(331),function(n){function e(){return c()(this,e),l()(this,(e.__proto__||r()(e)).apply(this,arguments))}return f()(e,n),u()(e,[{key:"render",value:function(){return d.a.createElement("footer",null,d.a.createElement("div",{className:"copyright"},d.a.createElement("div",{className:"copyright-cn"},"众安·体验设计中心"),d.a.createElement("div",{className:"copyright-en"},"Zhongan UX Densign")))}}]),e}(p.Component));e.a=v},405:function(n,e,t){"use strict";t(242),t(332)},412:function(n,e,t){"use strict";var o=t(406),r=t.n(o),i=t(407),c=t.n(i),a=t(408),u=t.n(a),s=t(4),l=t.n(s),h=t(5),f=t.n(h),p=t(7),d=t.n(p),v=t(2),m=t.n(v),b=t(6),C=t.n(b),x=t(0),k=t.n(x),y=t(55),g=t.n(y),_=t(409),E=t.n(_),N=(t(405),t(402)),w=t(19),D=t.n(w),G=t(410),R=(t(401),function(n){function e(n){f()(this,e);var t=m()(this,(e.__proto__||l()(e)).call(this,n));return t.containerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.title=String(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t}return C()(e,n),d()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&g.a.unmountComponentAtNode(this.containerElem)}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(5),t.e(6),t.e(70)]).then(t.bind(null,544)).then(function(n){return{args:["context","React","ReactDOM","zarm"],argv:[e,k.a,g.a,n]}}).then(function(t){var o=t.args,r=t.argv;n=n.replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = zarm;").replace("mountNode","document.getElementById('"+e.containerId+"')");var i=Object(G.transform)(n,{presets:["es2015","react"]}).code;o.push(i),(new(Function.prototype.bind.apply(Function,[null].concat(D()(o))))).apply(void 0,D()(r)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return"/panel"===this.props.location.pathname?k.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}):k.a.createElement(N.a,{titleRender:k.a.createElement("span",null,this.title)},k.a.createElement("div",{id:this.containerId,ref:function(e){n.containerElem=e}}))}}]),e}(k.a.Component)),z=t(403),M=t(404),A=function(n){function e(n){f()(this,e);var t=m()(this,(e.__proto__||l()(e)).call(this,n));return t.nodeList=[],t.components=new u.a,t.renderer=new E.a.Renderer,t}return C()(e,n),d()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){g.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,i=r()(this.components);!(n=(o=i.next()).done);n=!0){var a=o.value,u=c()(a,2),s=u[0],l=u[1],h=document.getElementById(s);this.nodeList.push(h),h instanceof HTMLElement&&g.a.render(l,h)}}catch(n){e=!0,t=n}finally{try{!n&&i.return&&i.return()}finally{if(e)throw t}}}},{key:"render",value:function(){var n=this,e=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),t=e.document,o=e.className;if("string"==typeof t){this.components.clear();var r=E()(t.replace(/:::\s?api\s?([^]+?):::/g,"").replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var r=o.toString(36);return n.components.set(r,k.a.createElement(R,n.props,t)),"<div id="+r+"></div>"}),{renderer:this.renderer});return k.a.createElement(z.a,{className:o},k.a.createElement("main",{dangerouslySetInnerHTML:{__html:r}}),k.a.createElement(M.a,null))}return k.a.createElement("span",null)}}]),e}(k.a.Component);e.a=A},42:function(n,e,t){"use strict";e.__esModule=!0;var o=function(n){return n&&n.__esModule?n:{default:n}}(t(129));e.default=function(n,e,t){return e in n?(0,o.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},424:function(n,e){n.exports='## 复选框 Checkbox\n\n:::demo 基本用法\n```jsx\nimport { Cell, Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell><Checkbox>普通</Checkbox></Cell>\n        <Cell><Checkbox defaultChecked>默认选中</Checkbox></Cell>\n        <Cell><Checkbox disabled>禁用</Checkbox></Cell>\n        <Cell><Checkbox defaultChecked disabled>选中且禁用</Checkbox></Cell>\n        <Cell className="agreement-box">\n          <Checkbox id="agreement" />\n          <label htmlFor="agreement">阅读并同意<a href="/#" onClick={(e) => { e.preventDefault(); alert(\'agree it\'); }}>《XXX条款》</a>中的相关规定</label>\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 按钮样式\n```jsx\nimport { Cell, Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Checkbox.Group type="button">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" defaultValue={[\'0\', \'1\']}>\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          指定默认值\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2" disabled>选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          禁用指定项\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" shape="radius">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          圆角\n        </Cell>\n\n        <Cell\n          description={\n            <Checkbox.Group type="button" shape="round">\n              <Checkbox value="0">选项一</Checkbox>\n              <Checkbox value="1">选项二</Checkbox>\n              <Checkbox value="2">选项三</Checkbox>\n            </Checkbox.Group>\n          }\n        >\n          椭圆角\n        </Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 块级样式\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="block-box">\n        <Checkbox.Group block type="button">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2">选项三</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 列表样式\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Checkbox.Group type="cell">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2" disabled>选项三（禁止选择）</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::demo 列表样式禁用状态\n```jsx\nimport { Checkbox } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Checkbox.Group disabled type="cell">\n          <Checkbox value="0">选项一</Checkbox>\n          <Checkbox value="1">选项二</Checkbox>\n          <Checkbox value="2">选项三</Checkbox>\n        </Checkbox.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n:::api API\n\n#### Checkbox\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-checkbox | | 类名前缀 |\n| className | string | | | 追加类名 |\n| checked | boolean | | | 是否选中 |\n| shape | string | | `radius`, `round` | 形状 |\n| block | boolean | false | | 是否为块级元素 |\n| type | string | | `button`, `cell` | 显示类型 |\n| defaultChecked | boolean | | | 初始是否选中 |\n| value | string &#124; number | | | 值 |\n| disabled | boolean | false | | 是否禁用 |\n| onChange | <code>(checked: boolean) => void</code> | | <code>\\(checked: boolean\\)</code> | 值变化时触发的回调函数 |\n| id | string | | | 方便外部带有for属性的label标签控制当前checkbox |\n\n#### Checkbox.Group\n| 属性 | 类型 | 默认值 | 可选值／参数 | 说明 |\n| :--- | :--- | :--- | :--- | :--- |\n| prefixCls | string | za-checkbox | | 类名前缀 |\n| className | string | | | 追加类名 |\n| block | boolean | false | | 是否为块级元素 |\n| shape | string | | `radius`, `round` | 形状 |\n| value | Array&lt;number &#124; string&gt; | [ ] | | 选中值 |\n| type | string | | `button`, `cell` | 显示类型 |\n| defaultValue | Array&lt;number &#124; string&gt; | [ ] | | 初始选中值 |\n| disabled | boolean | false | | 是否禁用 |\n| onChange | <code>(value: Array&lt;number &#124; string&gt;) => void</code> | noop | \\(value: Array&lt;number &#124; string&gt;\\) | 值变化时触发的回调函数 |\n| compact | boolean | false | | group内的checkbox（type="button"）是否无缝相连 |\n\n:::'},471:function(n,e,t){}}]);