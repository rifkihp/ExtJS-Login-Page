Ext.define('MyApp.view.main.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    controller: 'login',

    title: 'SignIn',
    autoShow: true,
    closable: false,
    
    width: 350,
    height: 250,

    layout: 'fit',
    
    items: [{
        xtype: 'form',
        layout: 'anchor',
        bodyPadding: 10,

        fieldDefaults: {
            anchor: '100%',
            msgTarget: 'side',
            allowBlank: false    
        },

        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'User ID',            
        }, {
            xtype: 'textfield',
            type: 'password',
            name: 'password',
            fieldLabel: 'Password',
        }]
    }],

    buttons: [{
        text: 'Login',
        listeners: {
            click: 'onButtonLoginClick'
        }
        
    }]

})