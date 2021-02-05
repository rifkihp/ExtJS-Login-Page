Ext.define('MyApp.view.main.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onButtonLoginClick: function(button) {

        this.getView().destroy();

        Ext.create({
            xtype: 'app-main'
        });

    }
});
