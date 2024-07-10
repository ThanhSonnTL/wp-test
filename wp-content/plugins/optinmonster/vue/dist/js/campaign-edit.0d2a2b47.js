"use strict";(self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]=self["webpackChunkoptinmonster_wordpress_plugin_vue_app"]||[]).push([[900],{84946:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t._self._c;return t.routeId?e("core-page",{staticClass:"omapi-campaign-settings"},[e("div",{staticClass:"omapi-card__flex"},[e("router-link",{staticClass:"omapi-link-arrow-before omapi-button__link",attrs:{to:{name:"campaigns"}}},[t._v("Return to Campaigns List")]),e("a",{staticClass:"omapi-link-arrow-after omapi-button__link",attrs:{href:t.builderLink,title:`Edit Design for “${t.title}”`}},[t._v(" Edit Design ")])],1),t.isLoading?e("core-loading",[e("h1",[t._v("Loading...")])]):e("form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("h1",[e("span",[t._v(t._s(t.title))])]),e("common-alerts",{attrs:{id:"om-notification-campaign",alerts:t.alerts}}),e("div",{staticClass:"omapi-card__flex omapi-campaign-settings-sections",class:{disabled:t.isDisabled}},[e("common-card",{staticClass:"omapi-campaign-settings__wrapper",attrs:{size:"two-thirds",title:"WordPress Output Settings","content-class":"omapi-card__border","footer-class":"omapi-card__child"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("WordPress Output Settings")]},proxy:!0},{key:"footer",fn:function(){return[t.hasError?t._e():e("campaigns-advanced-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1),!t.hasError&&t.isWooActive?e("campaigns-woo-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1):t._e(),!t.hasError&&t.isEddActive?e("campaigns-edd-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1):t._e(),!t.hasError&&t.memberpress.isActive?e("campaigns-member-press-settings",{attrs:{campaign:t.campaign}},[e("core-save-button",{attrs:{color:"green",disabled:!t.changed,saving:t.saving}})],1):t._e()]},proxy:!0}],null,!1,3830435280)},[t.hasError?e("p",{staticClass:"text-setting"},[t._v("An error was encountered.")]):[e("p",{staticClass:"text-setting"},[t._v(" Control when and where your campaigns are displayed once the targeting conditions are met. ")]),"Inline"===t.campaignType?e("campaigns-inline-settings",{attrs:{campaign:t.campaign}}):t._e(),t.hasMailPoet?e("campaigns-mailpoet-settings",{attrs:{campaign:t.campaign}}):t._e()]],2),e("campaigns-right-column",{attrs:{"campaign-id":t.id,changed:t.changed,saving:t.saving,"new-status":t.newStatus,"status-text":t.statusText},on:{updateStatus:t.onChangeStatus}})],1)],1)],1):t._e()},i=[],n=a(27361),r=a.n(n),h=a(20629),g=a(64074),o=a(87475),c={mixins:[g.Y],beforeRouteLeave(t,e,a){if(!this.changed||confirm("You have unsaved changes. Are you sure you want to lose these changes?"))return this.resetCampaign(),a()},data(){return{changed:!1,orig:!1,origMeta:{},newStatus:"",saving:!1}},computed:{...(0,h.rn)(["alerts"]),...(0,h.rn)("campaigns",["campaigns"]),...(0,h.Se)("campaigns",["getCampaign","hasError"]),...(0,h.Se)("wp",["hasMailPoet","isWooActive","isEddActive","memberpress"]),...(0,h.Se)(["isFetched","isFetching"]),routeId(){return this.$get("$route.params.campaignId","")},campaign(){return this.getCampaign(this.routeId)},fetchedCampaign(){return this.isFetched(this.routeId)},fetchingCampaign(){return this.isFetching(this.routeId)},shouldFetch(){return!this.fetchingCampaign&&!this.fetchedCampaign},isLoading(){return!this.showAlerts&&(!this.fetchedCampaign||this.$store.getters.isLoading(["campaigns","me"]))},isDisabled(){return!this.hasError&&(this.isLoading||!this.isFetched("wpResources"))},showAlerts(){return Boolean(this.alerts.length)},title(){return this.$get("campaign.name","No Campaign Found")},statusText(){const t="active"!==this.newStatus;return this.isSplit?t?"Published":"Draft":t?this.settingEnabled?"Pending":"Draft":this.settingEnabled?"Published":"Pending"}},watch:{isLoading(t){t||this.fetch()},title(){this.updateTitle()},campaign(t,e){if(!this.fetchedCampaign||!r()(e,"wp"))return;if(this.orig||(this.orig=this.getMetaString(e)),this.newStatus!==this.campaignStatus)return void(this.changed=!0);t=this.getMetaString(t);const a=(0,o.r3)(t,this.orig);this.changed=-1!==a},newStatus(){this.changed||(this.changed=this.newStatus!==this.campaignStatus)}},mounted(){this.routeId&&(this.fetch(),this.updateTitle(),window.addEventListener("beforeunload",this.maybePreventExit))},beforeDestroy(){window.removeEventListener("beforeunload",this.maybePreventExit)},methods:{...(0,h.nv)("campaigns",["fetchCampaign","fetchWpDataForCampaign","saveWordPress"]),...(0,h.OI)(["fetching","fetched"]),fetch(){this.fetchingCampaign||(this.fetchedCampaign||this.fetching(this.routeId),this.fetchCampaign({campaignId:this.routeId}).then((()=>this.fetchWpData())).catch((()=>{})))},fetchWpData(){const t=this.fetchedCampaign?Promise.resolve():this.fetchWpDataForCampaign({campaignId:this.routeId});return t.then((()=>this.fetched(this.routeId))).then((()=>this.afterFetched())).catch((()=>{}))},save(){this.$store.commit("clearAlerts"),this.saving=!0,this.setStatus({campaigns:[this.id],status:this.newStatus}),this.saveWordPress({campaignId:this.id,settings:this.getSettings()}).then((()=>{this.fetchWpData()}))},afterFetched(){this.orig=this.getMetaString(this.campaign),this.origMeta=this.$get("campaign.wp.post_meta",{}),this.newStatus=this.campaignStatus,this.changed=!1,this.saving=!1},updateTitle(){const t=this.$get("campaign.name",this.id);t&&(this.$store.dispatch("setTitle",{title:`Output Settings: ${t}`,setBannerTitle:!1}),this.$store.commit("setBannerTitle","Campaign Output Settings"))},getMetaString(t){const e=this.getSettings(r()(t,"wp.post_meta",{}));return JSON.stringify(e)+this.newStatus},maybePreventExit(t){if(this.changed)return t.preventDefault(),t.returnValue="You have unsaved changes. Are you sure you want to lose these changes?",t.returnValue},resetCampaign(){this.newStatus=this.campaignStatus,this.updateCampaignMeta({campaignId:this.id,meta:this.origMeta})},onChangeStatus(t){switch(t){case"Pending":this.toggleEmbed("active"!==this.newStatus);break;case"Published":this.newStatus="active",this.toggleEmbed(!0);break;case"Draft":this.newStatus="paused",this.toggleEmbed(!1);break;default:break}},toggleEmbed(t){t!==this.settingEnabled&&(this.settingEnabled=t)}}},d=c,p=a(1001),u=(0,p.Z)(d,s,i,!1,null,null,null),m=u.exports}}]);
//# sourceMappingURL=campaign-edit.0d2a2b47.js.map