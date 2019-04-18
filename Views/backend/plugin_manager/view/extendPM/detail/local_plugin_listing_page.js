
//{block name="backend/plugin_manager/view/detail/container" append}
Ext.define('Shopware.apps.PluginManager.view.detail.ContainerOverride', {

    override: 'Shopware.apps.PluginManager.view.detail.Container',
    updateMetaData: function(plugin) {
        var me = this;

        me.callParent(arguments);

        me.metaDataContainer.add({
            xtype: 'button',
            iconCls: 'sprite-store-open',
            text: '{s name="visit_store_page" namespace="frosh_extended_plugin_manager"}Visit Store{/s}',
            handler: function () {
                window.open('https://store.shopware.com/' + (Ext.userLanguage && Ext.userLanguage.substring(0, 2)!=='de'?'en/':'') + 'search?sSearch=' + plugin.get('code'),'_swstore');
            }
        });
    },

});
//{/block}