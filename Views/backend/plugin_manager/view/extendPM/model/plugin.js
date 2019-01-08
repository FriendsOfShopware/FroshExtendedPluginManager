//{block name="backend/plugin_manager/model/plugin" append}
Ext.define('Shopware.apps.PluginManager.model.PluginOverride', {

    override: 'Shopware.apps.PluginManager.model.Plugin',
	code: function() {
        return this.get('code');
    },
	
});
//{/block}