import{X as E,aj as G,o as g,c as x,W as K,B as i,H as C,I as B,a8 as D,aa as M,a as d,v as a,G as y,C as r,J as $,r as u,t as k,E as v,x as J,u as z,F as O,D as I,_ as h,an as W,y as Z,A as H}from"./index.9_UWDUyH.js";import{a as F,J as X,S as Q,B as N}from"./Checkbox.B1-AJdrm.js";import{_ as T}from"./dynamic-import-helper.DN_NaYa5.js";import{C as Y}from"./Card.BDVWUPAy.js";import{B as ee}from"./Button.Bq0AsH5N.js";import{S as te}from"./Close.CP9mbBVR.js";import{S as se}from"./External.CH1_OlGp.js";import{C as R}from"./datetime.v8fTPlup.js";import{G as L,a as A}from"./Row.BrU4A2qg.js";import{C as oe}from"./QuestionMark.DUvjzuFY.js";import{C as ne}from"./Index.CXvq4m_5.js";import"./debounce.DK1RwK91.js";import"./Caret.BLqjRAPo.js";import"./Slide.Dfu7CR71.js";import"./LicenseUpgrade.BxOe2hwx.js";import"./SetupWizard.DqWWnQjs.js";const ie={props:{modelValue:{type:[String,Number],default:""},autosize:{type:Boolean,default:!0},minHeight:{type:[Number],default:null},maxHeight:{type:[Number],default:null},important:{type:[Boolean,Array],default:!1}},data(){return{val:null,maxHeightScroll:!1,height:"auto"}},computed:{computedStyles(){return this.autosize?{resize:this.isResizeImportant?"none !important":"none",height:this.height,overflow:this.maxHeightScroll?"auto":this.isOverflowImportant?"hidden !important":"hidden"}:{height:this.minHeight?this.minHeight+"px":""}},isResizeImportant(){const e=this.important;return e===!0||Array.isArray(e)&&e.includes("resize")},isOverflowImportant(){const e=this.important;return e===!0||Array.isArray(e)&&e.includes("overflow")},isHeightImportant(){const e=this.important;return e===!0||Array.isArray(e)&&e.includes("height")}},watch:{value(e){this.val=e},val(e){this.$nextTick(this.resize),this.$emit("update:modelValue",e)},minHeight(){this.$nextTick(this.resize)},maxHeight(){this.$nextTick(this.resize)},autosize(e){e&&this.resize()}},methods:{resize(){const e=this.isHeightImportant?"important":"";return this.height=`auto${e?" !important":""}`,this.$nextTick(()=>{let t=this.$el.scrollHeight+1;this.minHeight&&(t=t<this.minHeight?this.minHeight:t),this.maxHeight&&(t>this.maxHeight?(t=this.maxHeight,this.maxHeightScroll=!0):this.maxHeightScroll=!1);const s=t+"px";this.height=`${s}${e?" !important":""}`}),this}},created(){this.val=this.modelValue},mounted(){this.resize()}};function le(e,t,s,n,o,l){return E((g(),x("textarea",{class:"aioseo-textarea-autosize",style:K(l.computedStyles),"onUpdate:modelValue":t[0]||(t[0]=c=>o.val=c),onFocus:t[1]||(t[1]=(...c)=>l.resize&&l.resize(...c))},null,36)),[[G,o.val]])}const ae=T(ie,[["render",le]]),re={props:{modelValue:Boolean,disabled:{type:Boolean,default(){return!1}}},methods:{labelToggle(){this.$refs.input.click()}}},de={class:"toggle-content"},ce=["disabled","checked"],ue=i("span",{class:"toggle-switch"},null,-1);function pe(e,t,s,n,o,l){return g(),x("label",{class:B(["aioseo-toggle",{disabled:s.disabled}]),tabindex:"0",onKeydown:[t[1]||(t[1]=D((...c)=>l.labelToggle&&l.labelToggle(...c),["enter"])),t[2]||(t[2]=D((...c)=>l.labelToggle&&l.labelToggle(...c),["space"]))]},[i("div",de,[i("input",{disabled:s.disabled,type:"checkbox",checked:s.modelValue,onInput:t[0]||(t[0]=c=>e.$emit("update:modelValue",c.target.checked)),ref:"input"},null,40,ce),ue]),C(e.$slots,"default")],34)}const ge=T(re,[["render",pe]]),me={},he={viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-add-plus"},_e=i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.66675 1.16669H11.6667C12.3084 1.16669 12.8334 1.69169 12.8334 2.33335V9.33335C12.8334 9.97502 12.3084 10.5 11.6667 10.5H4.66675C4.02508 10.5 3.50008 9.97502 3.50008 9.33335V2.33335C3.50008 1.69169 4.02508 1.16669 4.66675 1.16669ZM1.16675 3.50002H2.33341V11.6667H10.5001V12.8334H2.33341C1.69175 12.8334 1.16675 12.3084 1.16675 11.6667V3.50002ZM11.6667 9.33335H4.66675V2.33335H11.6667V9.33335ZM8.75008 8.75002H7.58341V6.41669H5.25008V5.25002H7.58341V2.91669H8.75008V5.25002H11.0834V6.41669H8.75008V8.75002Z",fill:"currentColor"},null,-1),ye=[_e];function fe(e,t){return g(),x("svg",he,ye)}const ke=T(me,[["render",fe]]),Se={setup(){return{optionsStore:M()}},components:{BaseButton:ee,BaseSelect:F,SvgAddPlus:ke,SvgClose:te,SvgExternal:se},mixins:[X],props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data(){return{excludeOptions:[],strings:{typeToSearch:this.$t.__("Type to search...",this.$td),noOptionsPosts:this.$t.__("Begin typing a post ID, title or slug to search...",this.$td),noOptionsTerms:this.$t.__("Begin typing a term ID or name to search...",this.$td),noResult:this.$t.__("No results found for your search. Try again!",this.$td),clear:this.$t.__("Clear",this.$td),id:this.$t.__("ID",this.$td),type:this.$t.__("Type",this.$td)}}},computed:{optionName:{get(){return this.type==="posts"?this.options.excludePosts:this.options.excludeTerms},set(e){if(this.type==="posts"){this.options.excludePosts=e;return}this.options.excludeTerms=e}},noOptions(){return this.type==="posts"?this.strings.noOptionsPosts:this.strings.noOptionsTerms}},methods:{processGetObjects(e){return this.optionsStore.getObjects({query:e,type:this.type}).then(t=>{this.excludeOptions=t.body.objects})},getOptionTitle(e,t){e=e.replace(/<\/?[^>]+(>|$)/g,""),t=t.replace(/<\/?[^>]+(>|$)/g,"");const s=new RegExp(`(${t})`,"gi");return e.replace(s,'<span class="search-term">$1</span>')},searchableLabel({value:e,label:t,slug:s}){return`${e} ${t} ${s}`}}},be={class:"aioseo-exclude-posts"},xe={class:"option"},ve=["innerHTML"],Te={class:"option-details"},Ve=["href"],we={class:"multiselect__tag"},Ce={class:"multiselect__tag-value"},Be=["onClick"];function Pe(e,t,s,n,o,l){const c=u("svg-add-plus"),m=u("base-button"),S=u("svg-external"),w=u("svg-close"),b=u("base-select");return g(),x("div",be,[d(b,{options:o.excludeOptions,"ajax-search":l.processGetObjects,customLabel:l.searchableLabel,size:"medium",multiple:"",modelValue:e.getJsonValues(l.optionName),"onUpdate:modelValue":t[0]||(t[0]=p=>l.optionName=e.setJsonValues(p)),placeholder:o.strings.typeToSearch},{noOptions:a(()=>[y(r(l.noOptions),1)]),noResult:a(()=>[y(r(o.strings.noResult),1)]),caret:a(({toggle:p})=>[d(m,{class:"multiselect-toggle",style:{padding:"10px 13px",width:"40px",position:"absolute",height:"36px",right:"2px",top:"2px","text-align":"center",transition:"transform .2s ease"},type:"gray",onClick:p},{default:a(()=>[d(c,{style:{width:"14px",height:"14px",color:"black"}})]),_:2},1032,["onClick"])]),option:a(({option:p,search:V})=>[i("div",xe,[i("div",{class:"option-title",innerHTML:l.getOptionTitle(p.label,V)},null,8,ve),i("div",Te,[i("span",null,r(o.strings.id)+": #"+r(p.value),1),i("span",null,r(o.strings.type)+": "+r(p.type),1)])]),i("a",{class:"option-permalink",href:p.link,target:"_blank",onClick:$(()=>{},["stop"])},[d(S)],8,Ve)]),tag:a(({option:p,remove:V})=>[i("div",we,[i("div",Ce,r(p.label)+" - #"+r(p.value),1),i("div",{class:"multiselect__tag-remove",onClick:$(P=>V(p),["stop"])},[d(w,{onClick:$(P=>V(p),["stop"])},null,8,["onClick"])],8,Be)])]),_:1},8,["options","ajax-search","customLabel","modelValue","placeholder"]),d(m,{type:"gray",size:"medium",onClick:t[1]||(t[1]=p=>l.optionName=[])},{default:a(()=>[y(r(o.strings.clear),1)]),_:1})])}const He=T(Se,[["render",Pe]]),$e={components:{SvgCheckmark:Q},props:{modelValue:[String,Boolean],name:String,labelClass:{type:String,default(){return""}},inputClass:{type:String,default(){return""}},id:String,size:String,disabled:Boolean,type:{type:Number,default(){return 1}}},computed:{typeClass(){return`type-${this.type}`}},methods:{labelToggle(){this.$refs.input.click()}}},De={class:"form-radio-wrapper"},ze={class:"form-radio"},Le=["checked","disabled","name","id"],Ae={class:"fancy-radio"};function Me(e,t,s,n,o,l){const c=u("svg-checkmark");return g(),x("label",{class:B(["aioseo-radio",[s.labelClass,{[s.size]:s.size},l.typeClass,{disabled:s.disabled}]]),onKeydown:[t[1]||(t[1]=D((...m)=>l.labelToggle&&l.labelToggle(...m),["enter"])),t[2]||(t[2]=D((...m)=>l.labelToggle&&l.labelToggle(...m),["space"]))],onClick:$(()=>{},["stop"])},[C(e.$slots,"header"),i("span",De,[i("span",ze,[i("input",{type:"radio",onInput:t[0]||(t[0]=m=>e.$emit("update:modelValue",m.target.checked)),checked:s.modelValue,disabled:s.disabled,name:s.name,id:s.id,class:B(s.inputClass),ref:"input"},null,42,Le),i("span",Ae,[s.type===1?(g(),k(c,{key:0})):v("",!0)])])]),C(e.$slots,"default")],34)}const Oe=T($e,[["render",Me]]),Ie={components:{BaseCheckbox:N,BaseRadio:Oe},props:{type:{type:String,required:!0},name:{type:String,required:!0},modelValue:{type:[Boolean,String,Event],required:!0},active:Boolean,size:String,round:Boolean},methods:{toggleCheckbox(){this.$refs.toggle.labelToggle()}}};function Ne(e,t,s,n,o,l){return g(),x("div",{class:B(["aioseo-highlight-toggle",[{active:s.active},{[s.size]:s.size}]]),onClick:t[1]||(t[1]=(...c)=>l.toggleCheckbox&&l.toggleCheckbox(...c))},[(g(),k(J(`base-${s.type}`),{ref:"toggle",name:s.name,modelValue:s.modelValue,size:s.size,round:s.round,"onUpdate:modelValue":t[0]||(t[0]=c=>e.$emit("update:modelValue",c))},{default:a(()=>[C(e.$slots,"default")]),_:3},8,["name","modelValue","size","round"]))],2)}const U=T(Ie,[["render",Ne]]),Re={setup(){return{rootStore:z()}},components:{BaseHighlightToggle:U,CoreAlert:R,GridColumn:L,GridRow:A},props:{type:{type:String,required:!0},options:{type:Object,required:!0},registeredPostStatuses:Object,excluded:{type:Array,default(){return[]}}},data(){return{strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Status:",this.$td),noPostStatuses:this.$t.__("No post statuses available.",this.$td),noTaxonomies:this.$t.__("No taxonomies available.",this.$td),noPostStatusesDescription:this.$t.__("All post statuses are set to noindex or your site does not have any post statuses registered that are supported by this feature.",this.$td),noTaxonomiesDescription:this.$t.__("All taxonomies are set to noindex or your site does not have any taxonomies registered that are supported by this feature.",this.$td)}}},computed:{getRegisteredPostStatuses(){return this.registeredPostStatuses||this.rootStore.aioseo.postData},postStatuses(){return this.getRegisteredPostStatuses[this.type].filter(e=>!this.excluded.includes(e.status))}},methods:{emitInput(e){this.$emit("input",e)},updateValue(e,t){if(e){const n=this.options[this.type].included;n.push(t.status),this.options[this.type].included=n;return}const s=this.options[this.type].included.findIndex(n=>n===t.status);s!==-1&&this.options[this.type].included.splice(s,1)},getValue(e){return this.options[this.type].included.includes(e.status)},isActive(e){return this.options[this.type].included.findIndex(s=>s===e.status)!==-1}}},Ue={class:"aioseo-post-status-options-toggle"},qe={class:"post-status-options-settings"};function je(e,t,s,n,o,l){const c=u("core-alert"),m=u("base-highlight-toggle"),S=u("grid-column"),w=u("grid-row");return g(),x("div",Ue,[i("div",qe,[l.postStatuses.length===0&&s.type==="postStatuses"?(g(),k(c,{key:0,type:"blue"},{default:a(()=>[i("strong",null,r(o.strings.noPostStatuses),1),y(" "+r(o.strings.noPostStatusesDescription),1)]),_:1})):v("",!0),l.postStatuses.length===0&&s.type==="taxonomies"?(g(),k(c,{key:1,type:"blue"},{default:a(()=>[i("strong",null,r(o.strings.noTaxonomies),1),y(" "+r(o.strings.noTaxonomiesDescription),1)]),_:1})):v("",!0),0<l.postStatuses.length?(g(),k(w,{key:2},{default:a(()=>[(g(!0),x(O,null,I(l.postStatuses,(b,p)=>(g(),k(S,{md:"6",key:p},{default:a(()=>[d(m,{size:"medium",active:l.isActive(b),name:b.label,type:"checkbox",modelValue:l.getValue(b),"onUpdate:modelValue":V=>l.updateValue(V,b)},{default:a(()=>[y(r(b.label)+" ("+r(b.status)+") ",1)]),_:2},1032,["active","name","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})):v("",!0)])])}const Ee=T(Re,[["render",je]]),Ge={methods:{viewPost(e){return this.$t.sprintf(this.$t.__("View %1$s",this.$td),e||this.$t.__("Post",this.$td))},editPost(e){return this.$t.sprintf(this.$t.__("Edit %1$s",this.$td),e||this.$t.__("Post",this.$td))},getPostIconClass(e){const t="dashicons-admin-post";return e!=null&&e.startsWith("dashicons-awb-")?t:e||t}}},Ke={setup(){return{rootStore:z()}},components:{BaseHighlightToggle:U,CoreAlert:R,CoreTooltip:oe,GridColumn:L,GridRow:A},mixins:[Ge],props:{type:{type:String,required:!0},options:{type:Object,required:!0},registeredPostTypes:Object,excluded:{type:Array,default(){return[]}}},data(){return{strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td),noPostTypes:this.$t.__("No post types available.",this.$td),noTaxonomies:this.$t.__("No taxonomies available.",this.$td),noPostTypesDescription:this.$t.__("All post types are set to noindex or your site does not have any post types registered that are supported by this feature.",this.$td),noTaxonomiesDescription:this.$t.__("All taxonomies are set to noindex or your site does not have any taxonomies registered that are supported by this feature.",this.$td)}}},computed:{getRegisteredPostTypes(){return this.registeredPostTypes||this.rootStore.aioseo.postData},postTypes(){return this.getRegisteredPostTypes[this.type].filter(e=>!this.excluded.includes(e.name))}},methods:{emitInput(e){this.$emit("input",e)},updateValue(e,t){if(e){const n=this.options[this.type].included;n.push(t.name),this.options[this.type].included=n;return}const s=this.options[this.type].included.findIndex(n=>n===t.name);s!==-1&&this.options[this.type].included.splice(s,1)},getValue(e){return this.options[this.type].included.includes(e.name)},isActive(e){return this.options[this.type].included.findIndex(s=>s===e.name)!==-1}}},Je={class:"aioseo-post-type-options-toggle"},We={class:"post-type-options-settings"},Ze={class:"aioseo-description"},Fe=i("br",null,null,-1);function Xe(e,t,s,n,o,l){const c=u("core-alert"),m=u("core-tooltip"),S=u("base-highlight-toggle"),w=u("grid-column"),b=u("grid-row");return g(),x("div",Je,[i("div",We,[l.postTypes.length===0&&s.type==="postTypes"?(g(),k(c,{key:0,type:"blue"},{default:a(()=>[i("strong",null,r(o.strings.noPostTypes),1),y(" "+r(o.strings.noPostTypesDescription),1)]),_:1})):v("",!0),l.postTypes.length===0&&s.type==="taxonomies"?(g(),k(c,{key:1,type:"blue"},{default:a(()=>[i("strong",null,r(o.strings.noTaxonomies),1),y(" "+r(o.strings.noTaxonomiesDescription),1)]),_:1})):v("",!0),0<l.postTypes.length?(g(),k(b,{key:2},{default:a(()=>[(g(!0),x(O,null,I(l.postTypes,(p,V)=>(g(),k(w,{md:"6",key:V},{default:a(()=>[d(S,{size:"medium",active:l.isActive(p),name:p.name,type:"checkbox",modelValue:l.getValue(p),"onUpdate:modelValue":P=>l.updateValue(P,p)},{default:a(()=>[d(m,null,{tooltip:a(()=>[i("div",Ze,[y(r(o.strings.label)+" ",1),i("strong",null,r(p.label),1),Fe,y(" "+r(o.strings.name)+" ",1),i("strong",null,r(p.name),1)])]),default:a(()=>[i("span",{class:B(["icon dashicons",e.getPostIconClass(p.icon)])},null,2)]),_:2},1024),y(" "+r(p.label),1)]),_:2},1032,["active","name","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})):v("",!0)])])}const Qe=T(Ke,[["render",Xe]]),Ye={components:{GridColumn:L,GridRow:A},props:{align:Boolean,alignSmall:Boolean,name:String,required:Boolean,noHorizontalMargin:{type:Boolean,default:!1},noVerticalMargin:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1},noRightMaxWidth:{type:Boolean,default:!1},leftSize:{type:String,default(){return"3"}},rightSize:{type:String,default(){return"9"}}}},et={key:0,class:"required-field"},tt={key:0,class:"aioseo-description"},st={class:"settings-content"};function ot(e,t,s,n,o,l){const c=u("grid-column"),m=u("grid-row");return g(),k(m,{class:B(["aioseo-settings-row",{"no-horizontal-margin":s.noHorizontalMargin,"no-vertical-margin":s.noVerticalMargin,"no-border":s.noBorder,"no-right-max-width":s.noRightMaxWidth}])},{default:a(()=>[C(e.$slots,"header"),d(c,{md:s.leftSize},{default:a(()=>[i("div",{class:B(["settings-name",{"no-name":!s.name&&!e.$slots.name}])},[i("div",{class:B(["name",[{align:s.align},{"align-small":s.alignSmall}]])},[C(e.$slots,"name",{},()=>[y(r(s.name)+" ",1),s.required?(g(),x("span",et," * ")):v("",!0)])],2),e.$slots.description?(g(),x("div",tt,[C(e.$slots,"description")])):v("",!0)],2)]),_:3},8,["md"]),d(c,{md:s.rightSize},{default:a(()=>[i("div",st,[C(e.$slots,"content")])]),_:3},8,["md"])]),_:3},8,["class"])}const q=T(Ye,[["render",ot]]),nt="aioseo-broken-link-checker",it={components:{CoreSettingsRow:q,CommonLicense:ne},data(){return{strings:{licenseKey:h("License Key",nt)}}}};function lt(e,t,s,n,o,l){const c=u("common-license"),m=u("core-settings-row");return g(),k(m,{name:o.strings.licenseKey},{content:a(()=>[d(c)]),_:1},8,["name"])}const at=T(it,[["render",lt]]),_="aioseo-broken-link-checker",rt={setup(){return{globalStrings:W,links:Z,optionsStore:M(),rootStore:z()}},components:{BaseCheckbox:N,BaseTextarea:ae,BaseToggle:ge,CoreCard:Y,CoreExcludePosts:He,CorePostStatusOptions:Ee,CorePostTypeOptions:Qe,CoreSettingsRow:q,LicenseKey:at},data(){return{strings:{generalSettings:h("General Settings",_),advancedSettings:h("Advanced Settings",_),linkTweaks:h("Link Tweaks",_),linkTweaksDescription:h("Note: These settings only apply to the content of posts; not comments or custom fields.",_),highlightBrokenLinks:h("Highlight Broken Links",_),highlightBrokenLinksDescription:H(h("Choose whether broken links should be marked on the frontend when you are logged in. Broken links will be underlined in red like %1$sthis%2$s.",_),'<span class="aioseo-blc-broken-link">',"</span>"),nofollowBroken:h("Stop search engines from following broken links",_),limitModifiedDate:h("Limit Modified Date",_),limitModifiedDateDescription:h("Don't update the modified date for a page/post when a link is updated.",_),postTypes:h("Post Types",_),postStatuses:h("Post Statuses",_),includeAllPostTypes:h("Include All Post Types",_),excludePosts:h("Exclude Posts",_),excludeDomains:h("Exclude Domains",_),excludeDomainsDescription:h('Add any domains you want to exclude from being checked, one per line. Do not include the scheme or "www" part of the domain (e.g. enter "aioseo.com" instead of "https://aioseo.com" or "www.aioseo.com").',_),selectPostTypes:H(h("Select which Post Types you want to enable %1$s for.",_),"Broken Link Checker"),includeAllPostStatuses:h("Include All Post Statuses",_),selectPostStatuses:H(h("Select which Post Statuses you want to enable %1$s for.",_),"Broken Link Checker"),uninstall:H(h("Uninstall %1$s",_),"Broken Link Checker"),uninstallDescription:H(h("Check this if you would like to remove ALL %1$s data upon plugin deletion. All data will be unrecoverable.",_),"Broken Link Checker")}}}},dt={class:"aioseo-blc-settings"},ct={class:"toggle-group"},ut={class:"aioseo-description"},pt={class:"toggle-group"},gt={class:"aioseo-description"},mt={class:"aioseo-description link-tweaks-description"},ht={class:"toggle-group"},_t=["innerHTML"],yt={class:"aioseo-description"},ft=["innerHTML"],kt={class:"aioseo-description"},St=["innerHTML"],bt={class:"aioseo-description"},xt={class:"aioseo-description"};function vt(e,t,s,n,o,l){const c=u("license-key"),m=u("base-toggle"),S=u("core-settings-row"),w=u("core-card"),b=u("base-checkbox"),p=u("core-post-type-options"),V=u("core-post-status-options"),P=u("core-exclude-posts"),j=u("base-textarea");return g(),x("div",dt,[d(w,{slug:"generalSettings","header-text":o.strings.generalSettings},{default:a(()=>[d(c),d(S,{name:o.strings.linkTweaks,align:""},{content:a(()=>[i("div",ct,[d(m,{modelValue:n.optionsStore.options.general.linkTweaks.nofollowBroken,"onUpdate:modelValue":t[0]||(t[0]=f=>n.optionsStore.options.general.linkTweaks.nofollowBroken=f)},null,8,["modelValue"]),i("span",ut,r(o.strings.nofollowBroken),1)]),i("div",pt,[d(m,{modelValue:n.optionsStore.options.general.linkTweaks.limitModifiedDate,"onUpdate:modelValue":t[1]||(t[1]=f=>n.optionsStore.options.general.linkTweaks.limitModifiedDate=f)},null,8,["modelValue"]),i("span",gt,r(o.strings.limitModifiedDateDescription),1)]),i("div",mt,r(o.strings.linkTweaksDescription),1)]),_:1},8,["name"]),d(S,{name:o.strings.highlightBrokenLinks,align:""},{content:a(()=>[i("div",ht,[d(m,{modelValue:n.optionsStore.options.general.highlightBrokenLinks,"onUpdate:modelValue":t[2]||(t[2]=f=>n.optionsStore.options.general.highlightBrokenLinks=f)},null,8,["modelValue"]),i("span",{class:"aioseo-description",innerHTML:o.strings.highlightBrokenLinksDescription},null,8,_t)])]),_:1},8,["name"])]),_:1},8,["header-text"]),d(w,{slug:"advancedSettings","header-text":o.strings.advancedSettings,toggles:n.optionsStore.options.advanced.enable},{header:a(()=>[d(m,{modelValue:n.optionsStore.options.advanced.enable,"onUpdate:modelValue":t[3]||(t[3]=f=>n.optionsStore.options.advanced.enable=f)},null,8,["modelValue"]),i("span",null,r(o.strings.advancedSettings),1)]),default:a(()=>[d(S,{name:o.strings.postTypes},{content:a(()=>[d(b,{size:"medium",modelValue:n.optionsStore.options.advanced.postTypes.all,"onUpdate:modelValue":t[4]||(t[4]=f=>n.optionsStore.options.advanced.postTypes.all=f)},{default:a(()=>[y(r(o.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),n.optionsStore.options.advanced.postTypes.all?v("",!0):(g(),k(p,{key:0,id:"postTypes",options:n.optionsStore.options.advanced,excluded:["attachment"],registeredPostTypes:n.rootStore.aioseoBrokenLinkChecker,type:"postTypes"},null,8,["options","registeredPostTypes"])),i("div",yt,[y(r(o.strings.selectPostTypes)+" ",1),i("span",{innerHTML:n.links.getDocLink(n.globalStrings.learnMore,"postTypes",!0)},null,8,ft)])]),_:1},8,["name"]),d(S,{name:o.strings.postStatuses},{content:a(()=>[d(b,{size:"medium",modelValue:n.optionsStore.options.advanced.postStatuses.all,"onUpdate:modelValue":t[5]||(t[5]=f=>n.optionsStore.options.advanced.postStatuses.all=f)},{default:a(()=>[y(r(o.strings.includeAllPostStatuses),1)]),_:1},8,["modelValue"]),n.optionsStore.options.advanced.postStatuses.all?v("",!0):(g(),k(V,{key:0,id:"postStatuses",options:n.optionsStore.options.advanced,registeredPostStatuses:n.rootStore.aioseoBrokenLinkChecker,type:"postStatuses"},null,8,["options","registeredPostStatuses"])),i("div",kt,[y(r(o.strings.selectPostStatuses)+" ",1),i("span",{innerHTML:n.links.getDocLink(n.globalStrings.learnMore,"postStatuses",!0)},null,8,St)])]),_:1},8,["name"]),d(S,{name:o.strings.excludePosts,align:""},{content:a(()=>[d(P,{type:"posts",options:n.optionsStore.options.advanced},null,8,["options"])]),_:1},8,["name"]),d(S,{name:o.strings.excludeDomains},{content:a(()=>[d(j,{minHeight:120,autosize:!1,modelValue:n.optionsStore.options.advanced.excludeDomains,"onUpdate:modelValue":t[6]||(t[6]=f=>n.optionsStore.options.advanced.excludeDomains=f)},null,8,["modelValue"]),i("div",bt,r(o.strings.excludeDomainsDescription),1)]),_:1},8,["name"]),d(S,{name:o.strings.uninstall},{content:a(()=>[d(m,{modelValue:n.optionsStore.options.advanced.uninstall,"onUpdate:modelValue":t[7]||(t[7]=f=>n.optionsStore.options.advanced.uninstall=f)},null,8,["modelValue"]),i("div",xt,r(o.strings.uninstallDescription),1)]),_:1},8,["name"])]),_:1},8,["header-text","toggles"])])}const Rt=T(rt,[["render",vt]]);export{Rt as default};
