"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[79],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"introduction-to-storybook",title:"Introduction to storybook",sidebar_label:"Introduction to storybook",keywords:["Introduction to storybook"]},c=void 0,s={unversionedId:"technical/introduction-to-storybook",id:"technical/introduction-to-storybook",isDocsHomePage:!1,title:"Introduction to storybook",description:"Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this URL.",source:"@site/docs/technical/introduction-to-storybook.md",sourceDirName:"technical",slug:"/technical/introduction-to-storybook",permalink:"/technical/introduction-to-storybook",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/technical/introduction-to-storybook.md",tags:[],version:"current",lastUpdatedBy:"Brian Douglas",lastUpdatedAt:1679760695,formattedLastUpdatedAt:"3/25/2023",frontMatter:{id:"introduction-to-storybook",title:"Introduction to storybook",sidebar_label:"Introduction to storybook",keywords:["Introduction to storybook"]},sidebar:"docs",previous:{title:"Set up Authentication",permalink:"/contributing/set-up-authentication"},next:{title:"Dark mode explained",permalink:"/technical/dark-mode-explained"}},u=[{value:"UI categories",id:"ui-categories",children:[],level:2},{value:"Making changes to storybook",id:"making-changes-to-storybook",children:[],level:2},{value:"Adding a new category",id:"adding-a-new-category",children:[],level:2},{value:"Adding a new UI element",id:"adding-a-new-ui-element",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this ",(0,i.kt)("a",{parentName:"p",href:"https://sauced-components.netlify.app/"},"URL"),"."),(0,i.kt)("p",null,"To run storybook, use this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run storybook\n")),(0,i.kt)("h2",{id:"ui-categories"},"UI categories"),(0,i.kt)("p",null,"Storybook is broken into several categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("b",null,"Button:")," These are the button elements that appear in the project in various forms. They primarily are the Button component in the project but can also be icons."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Cards:")," These are the main container elements in the project. Each item represents a live component in their current form in the project."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Primitives: These are the basic styling of base HTML components.")),(0,i.kt)("li",null,(0,i.kt)("b",null,"Nav:")," This is the main navigation bar for the project. There are two states, when there is no user logged in and when a user is logged in."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Footer:")," This represents the various footers for the project."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Homepage:")," This is the main component for the project homepage and shows the home page in its current form."),(0,i.kt)("li",null,(0,i.kt)("b",null,"Miscellaneous:")," These are components that currently don't fit neatly into the above categories.")),(0,i.kt)("h2",{id:"making-changes-to-storybook"},"Making changes to storybook"),(0,i.kt)("p",null,"This section details how to make changes to Storybook, mainly creating new categories or UI elements."),(0,i.kt)("h2",{id:"adding-a-new-category"},"Adding a new category"),(0,i.kt)("p",null,"To add a new category, a new file needs to be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"/stories"),". Please follow the naming convention of ",(0,i.kt)("inlineCode",{parentName:"p"},"*Previous File Number + 1*-*Name of Story Capitalized*-stories.js")," when creating a new file. In the file ensure you have this code in the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export default {\n    title: "*Name of category*"\n};\n')),(0,i.kt)("h2",{id:"adding-a-new-ui-element"},"Adding a new UI element"),(0,i.kt)("p",null,"To add a new UI element to to an existing category, add the following code to that category's file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export const *Name of UI Element* = () => (\n\n);\n")))}p.isMDXComponent=!0}}]);