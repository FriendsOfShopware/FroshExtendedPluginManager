
//{block name="backend/base/model/custom_facet"}
// {$smarty.block.parent}
Ext.define('extendPM.notification.SubscriptionWarningOverride', {

    override: 'Shopware.notification.SubscriptionWarning',

    getPluginNamesMessage: function (plugins, separator) {
        separator = (typeof separator == 'undefined' ? ',' : separator);

        var EpmPlugindata = Ext.Ajax.request({
            url: '{url controller="EpmPlugindata" action="index"}',
            async: false
        });

        var pluginData = Ext.decode(EpmPlugindata.responseText);

        var pluginNameList = plugins.map(function (plugin) {
            plugin.technicalName = plugin.label;
            plugin.info = '';

            if(pluginData) {
                var fplugin = pluginData.find(function(el) { return el.label === plugin.label});
                if(fplugin) {
                    plugin.technicalName = fplugin.technicalName;
                }
            }

            if(plugin.technicalName.startsWith('Frosh')) {
                plugin.info = '({s namespace=backend/plugin_manager/translation name=free_price}{/s})'
            }

            return '<div style="height:16px;"><a href="https://store.shopware.com/search?sSearch=' + plugin.technicalName + '" target="_swstore"><img width="16" height="16" src="data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" class="sprite-store-open" data-qtip="Visit Store"> ' + plugin.label + '</a> ' + plugin.info +'</div>';
        });
        return pluginNameList.join(separator);

    },

});

//{/block}
