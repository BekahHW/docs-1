"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[199],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6818:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"fetching-data-from-github",title:"Fetching data from the GitHub graphql API",sidebar_label:"Fetching data from the GitHub graphql API",keywords:["Fetching data from the GitHub graphql API"]},s=void 0,p={unversionedId:"technical/fetching-data-from-github",id:"technical/fetching-data-from-github",isDocsHomePage:!1,title:"Fetching data from the GitHub graphql API",description:"Over the past few years, GitHub has been enabling developers to build on our platform as 3rd party integrators. This enablement does not come without limitations such as rate-limiting and token access. Open Sauced originally started as a way to try out the GitHub GraphQL API with a production-ready application.",source:"@site/docs/technical/fetching-data-from-github.md",sourceDirName:"technical",slug:"/technical/fetching-data-from-github",permalink:"/technical/fetching-data-from-github",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/technical/fetching-data-from-github.md",tags:[],version:"current",lastUpdatedBy:"Brian Douglas",lastUpdatedAt:1679760695,formattedLastUpdatedAt:"3/25/2023",frontMatter:{id:"fetching-data-from-github",title:"Fetching data from the GitHub graphql API",sidebar_label:"Fetching data from the GitHub graphql API",keywords:["Fetching data from the GitHub graphql API"]},sidebar:"docs",previous:{title:"Dark mode explained",permalink:"/technical/dark-mode-explained"},next:{title:"Resolve merge conflicts",permalink:"/technical/resolve-merge-conflicts"}},d=[{value:"Implementation approach",id:"implementation-approach",children:[],level:2},{value:"OneGraph",id:"onegraph",children:[],level:2},{value:"Persisted queries",id:"persisted-queries",children:[],level:2},{value:"Goals repository",id:"goals-repository",children:[],level:2},{value:"Use of API in components",id:"use-of-api-in-components",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Over the past few years, GitHub has been enabling developers to build on our platform as 3rd party integrators. This enablement does not come without limitations such as rate-limiting and token access. Open Sauced originally started as a way to try out the GitHub GraphQL API with a production-ready application."),(0,l.kt)("h2",{id:"implementation-approach"},"Implementation approach"),(0,l.kt)("p",null,"Open Sauced is exclusively powered by the public data from open source repos. Not only is the data drawn from open sourced repos, the onboarding flow for Open Sauced walks the user through creating their own open sourced repo in order to track their own contributions."),(0,l.kt)("h2",{id:"onegraph"},"OneGraph"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.onegraph.com/"},"OneGraph")," is the tool used to consume the GitHub GraphQL API through one consistent GraphQL interface."),(0,l.kt)("h2",{id:"persisted-queries"},"Persisted queries"),(0,l.kt)("p",null,"Persisted queries are an advanced GraphQL feature that allow clients to pre-register queries with the server. In a typical workflow, the client will send the query to the server as part of a build process and the server will send back an id for the query. When the client wants to run the query, it sends the id instead of the full query string."),(0,l.kt)("p",null,"Developers use persisted queries because they reduce the amount of bandwidth sent from the client to the server and they improve security by locking down the queries that can be sent to the server."),(0,l.kt)("p",null,"OneGraph makes this all easy to do, and you can read up more on that in ",(0,l.kt)("a",{parentName:"p",href:"https://www.onegraph.com/docs/persisted_queries.html"},"their documentation"),"."),(0,l.kt)("h2",{id:"goals-repository"},"Goals repository"),(0,l.kt)("p",null,"Each Open Sauced user leverages their own GitHub repository as a database. The repository is generated during sign up and is the companion for finding open source contributions to make. All data in this repository is a mirror of the data you see on the opensauced.pizza dashboard."),(0,l.kt)("p",null,"The repo ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/goals-template"},"open-sauced/goals-template")," is used as a template repo to generate the user's ",(0,l.kt)("inlineCode",{parentName:"p"},"open-sauced-goals")," repo."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"data.json"),"\nThe Open Sauced goal data in this list is populatated using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/actions/blob/main/goals-caching/update-open-sauced-goals-cache.js"},"goals-caching.yml"),". Each opened issue in the goals repo full name is stored along with star, forks, and issues count. This is needed for rendering the user's open sauced dashboard."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"stars.json"),"\nThe Open Sauced recommendation data is stored using the logged in user's starred repositories. This data is accessible via the GitHub API and stored publically in goals repo for easy rendering. The list is populatated using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/actions/blob/main/goals-caching/update-open-sauced-goals-cache.js"},"goals-caching.yml"),". ",(0,l.kt)("em",{parentName:"p"},"Plans are being developed to power platform wide recommendations using this data, this is pending the reviewing of the GitHub TOCs"),"."),(0,l.kt)("h2",{id:"use-of-api-in-components"},"Use of API in components"),(0,l.kt)("p",null,"The following table shows which components (",(0,l.kt)("inlineCode",{parentName:"p"},"src/components/*.js"),") use which API functions (",(0,l.kt)("inlineCode",{parentName:"p"},"src/lib/apiGraphQL.js', 'src/lib/persistedGraphQL.js"),"), and what they do."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"API Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Persisted/Dynamic"),(0,l.kt)("th",{parentName:"tr",align:null},"Mutation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AddRepoForm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.createGoal"),(0,l.kt)("br",null),"Add goal through form input"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Contributions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedInteractionsFetch"),(0,l.kt)("br",null),"Contributions list for the user"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CreateGoals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.fetchOwnerId"),(0,l.kt)("br",null),"Need the repo owner ID first"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CreateGoals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.createOpenSaucedGoalsRepo"),(0,l.kt)("br",null),"Create from template"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DangerZone"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.updateGoal"),(0,l.kt)("br",null),"Remove the goal"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedIssuesByLabelFetch"),(0,l.kt)("br",null),"Fetch Goal's issues labeled ",(0,l.kt)("inlineCode",{parentName:"td"},"good first issue")," (First 5)"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedIssuesFetch"),(0,l.kt)("br",null),"Fetch Goal's all issues (First 5)"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedRepositoryIssuesByLabelFetch"),(0,l.kt)("br",null),"Fetch Goal's all issues (Paginated)"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Issues"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedRepositoryIssuesFetch"),(0,l.kt)("br",null),"Fetch Goal's issues labeled ",(0,l.kt)("inlineCode",{parentName:"td"},"good first issue")," (Paginated)"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NoteForm"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.updateGoal"),(0,l.kt)("br",null),"Updates Notes"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RecommendedRepoList"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.createGoal"),(0,l.kt)("br",null),"Add goal based on recommendations list"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repository"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedRepoDataFetch"),(0,l.kt)("br",null),"Gather partial data for goal"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repository"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.fetchGoalQuery"),(0,l.kt)("br",null),"Gather partial data for goal"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repository"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedForkFetch"),(0,l.kt)("br",null),"Look at whether user has this repo forked"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Repository"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedForkFetch"),(0,l.kt)("br",null),"Initiate forking the repo for the user"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RepositoryGoals"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedViewerStars"),(0,l.kt)("br",null),"Fetch repos starred by the user"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AdminStatsBar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.fetchRateLimit"),(0,l.kt)("br",null),"Shows administrator the status of rate limiting"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AdminStatsBar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.persistedDeploymentFetch"),(0,l.kt)("br",null),"Shows administrator deployment status"),(0,l.kt)("td",{parentName:"tr",align:null},"Persisted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AdminStatsBar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"api.fetchRepoCount"),(0,l.kt)("br",null),"Shows administrator the user count, based on count of ",(0,l.kt)("inlineCode",{parentName:"td"},"open-sauced-goals")," repos"),(0,l.kt)("td",{parentName:"tr",align:null},"Dynamic"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.onegraph.com/docs/persisted_queries.html"},"Using Persisted Queries")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=yr5kSZljBxo"},'GraphQL Enterprise Connect: "Persisted GraphQL", Brian Douglas'))))}m.isMDXComponent=!0}}]);