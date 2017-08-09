
//{block name="backend/plugin_manager/view/list/local_plugin_listing_page" append}
Ext.define('Shopware.apps.PluginManager.view.list.LocalPluginListingPageOverride', {

    override: 'Shopware.apps.PluginManager.view.list.LocalPluginListingPage',
	createActionColumnItems: function() {
        var me = this,
            items = me.callParent(arguments);
		
		items.push({
            iconCls: 'sprite-store-open',
            tooltip: '{s name="visit_store_page"}Visit Store{/s}',
            handler: function(grid, rowIndex, colIndex, item, eOpts, record) {
				window.open('https://store.shopware.com/search?sSearch=' + record.get('code'),'_swstore');
            },
            getClass: function(value, metaData, record) {
                if (!record.hasStoreData()) {
                    return Ext.baseCSSPrefix + 'hidden';
                }
            }
        });
		
		return items;
    },
	
});
//{/block}