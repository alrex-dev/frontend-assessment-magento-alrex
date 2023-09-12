let tabList = [];

function tabsViewModel($) {
    var self = this;
    
    self.tabs = tabList;
    
    self.selectTab = function(obj, obj2) {
        var target = $(obj2.currentTarget).data('target');

        $('.exercise-2 .tabs-container .tabs__item').each(function() {
            $(this).removeClass('tabs__item--active');
        });

        $('.exercise-2 .tabs-content-container .tabs-content').each(function() {
            $(this).removeClass('tabs-content--active');
        });

        $(obj2.currentTarget).parent().addClass('tabs__item--active');
        $(target).addClass('tabs-content--active');
    };

    self.tabClass = function(index) {
        return (index == 0) ? 'tabs__item--active' : '';
    }

    self.tabContentClass = function(index) {
        return (index == 0) ? 'tabs-content--active' : '';
    }

    self.selectAccordion = function(obj, obj2) {
        var currActive = $(obj2.currentTarget).parents('.tabs-content').hasClass('tabs-content--active');

        $('.exercise-2 .tabs-content-container .tabs-content').each(function() {
            $(this).removeClass('tabs-content--active');
        });
        
        if (!currActive) {
            $(obj2.currentTarget).parents('.tabs-content').addClass('tabs-content--active');
        }
    }
}

$(document).ready(function() {
    $.getJSON('data.json', function(res) {
        let counter = 1;

        for(var x=0; x<res.length; x++) {
            tabList.push({
                title: res[x].title,
                content: res[x].content,
                id: 'tab' + counter,
                target: '#tab' + counter
            });

            counter++;
        }

        ko.applyBindings(new tabsViewModel($));
    });

    $('.header .page-title').addClass('page-title--show');
    $('.animate').each(function() {
        let self = this;
        let delay = parseInt($(this).data('animation-delay'));

        setTimeout(function() {
            $(self).addClass('animate--show');
        }, delay);
    });
});