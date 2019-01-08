
//{block name="backend/plugin_manager/view/detail/container" append}
Ext.define('Shopware.apps.PluginManager.view.detail.ContainerOverride', {

    override: 'Shopware.apps.PluginManager.view.detail.Container',
    updateMetaData: function(plugin) {
        var me = this;

        me.callParent(arguments);

        me.metaDataContainer.add({
            xtype: 'button',
            iconCls: 'sprite-store-open',
            text: '{s name="visit_store_page"}Visit Store{/s}',
            handler: function () {
                window.open('https://store.shopware.com/search?sSearch=' + plugin.get('code'),'_swstore');
            }
        });
    },

});
//{/block}