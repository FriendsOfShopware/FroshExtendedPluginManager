//{block name="backend/plugin_manager/view/detail/container" append}
Ext.define('Shopware.apps.PluginManager.view.detail.ContainerOverride', {

    override: 'Shopware.apps.PluginManager.view.detail.Container',
    updateMetaData: function (plugin) {
        var me = this;
        me.callParent(arguments);

        if (plugin.hasStoreData()) {
            me.metaDataContainer.add(
                Ext.create('PluginManager.container.Container', {
                    html: '{s name="visit_store_page" namespace="frosh_extended_plugin_manager"}Visit Store{/s}',
                    cls: 'plugin-manager-action-button primary',
                    handler: function() {
                        window.open('https://store.shopware.com/search?sSearch=' + plugin.get('code'), '_swstore');
                    }
                })
            );
        }
    },

});
//{/block}