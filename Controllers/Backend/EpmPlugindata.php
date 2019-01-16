<?php

class Shopware_Controllers_Backend_EpmPlugindata extends \Enlight_Controller_Action implements \Shopware\Components\CSRFWhitelistAware
{
    public function getWhitelistedCSRFActions()
    {
        return ['index'];
    }

    public function indexAction() {

        $this->container->get('front')->Plugins()->ViewRenderer()->setNoRender();

        $subscriptionService = $this->container->get('shopware_plugininstaller.subscription_service');
        $pluginInformation = $subscriptionService->getPluginInformationFromApi();

        $data = [];
        if($pluginInformation) {
            $data = $pluginInformation->jsonSerialize()['plugins'];
        }

        $this->response->setBody(\json_encode($data));
    }

}