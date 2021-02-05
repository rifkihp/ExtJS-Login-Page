Ext.define('MyApp.view.main.Login', {
    extend: 'Ext.panel.Panel',
    xtype: 'login',

    controller: 'login',

    fullscreen: true,

    layout: {
        type: 'vbox',
        pack: 'center'
    },

    bodyPadding: 30,  
    
    items: [{
        xtype: 'formpanel',  
        title: 'Sign In User',
        bodyPadding: 30,  
        border: true,
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                label: 'User Id'
            },
            {
                xtype: 'passwordfield',
                name: 'password',
                label: 'Password'
            },
            {
                xtype: 'button',
                margin: '30px 0 0 0',
                text: 'Login',
                listeners: {
                    tap: 'onButtonLoginClick'
                }
            }
        ]
    }]

})