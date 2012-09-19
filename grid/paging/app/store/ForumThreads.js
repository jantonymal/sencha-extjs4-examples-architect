/*
 * File: app/store/ForumThreads.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.store.ForumThreads', {
    extend: 'Ext.data.Store',

    requires: [
        'Sencha.model.ForumThread'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ForumThreadsStore',
            model: 'Sencha.model.ForumThread',
            proxy: {
                type: 'jsonp',
                simpleSortMode: true,
                url: 'http://www.sencha.com/forum/topics-browse-remote.php',
                reader: {
                    type: 'json',
                    root: 'topics',
                    totalProperty: 'totalCount'
                }
            },
            sorters: {
                direction: 'DESC',
                property: 'lastpost'
            }
        }, cfg)]);
    }
});