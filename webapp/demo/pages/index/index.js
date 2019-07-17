define([
    'BaseView',
    'text!PagePath/index/tpl.layout.html',
    'text!PagePath/index/index.css',
    'text!StylePath/common.css'
], function (AbstractView,
             layoutHtml,
             indexStyle,
             commonStyle
             ) {

    return _.inherit(AbstractView, {

        propertys: function ($super) {

            $super();

            this.template = layoutHtml;
            this.commonstyle = commonStyle;
            this.style = indexStyle;
            this.events = {
                'click .js-items li': function (e) {
                    var el = $(e.currentTarget);
                    var tag = el.attr('data-tag');
                    
                    if (tag == "error") {
                        try {
                            var b = a + 1;
                            alert(b);
                        }
                        catch(error) {
                            alert(error);
                        }
                        
                        return;
                    }

                    if (tag == "lag") {
                        while (true) {
                            console.log('test-cool');
                        }
                        return;
                    }
                    this.forward(tag);
                }
            };

        },

        initHeader: function () {
            var host = window.location.host;
            var u = _.getUrlParam().u;
            var opts = {
                view: this,
                title: 'Hybrid Demo',
                back: function () {
                    this.back();
                }
            };

            this.header.set(opts);

        },

        initElement: function () {

        },

        addEvent: function () {
            this.on('onShow', function () {
            });
        }

    });

});
