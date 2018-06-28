var handle = function parse(list, target, prefix) {
    prefix = prefix || "";
    // Create list for iteration, only select keys starting with current prefix
    var iterate = [];
    for(var m in list) {
        if(m == prefix || m.startsWith(prefix ? prefix + '.' : '')) {
            iterate.push(m);
        }
    }
    
    // Handle preselected list
    for(var k in iterate) {
        var key = iterate[k];
        if(!list[key]) {
            continue;
        }
        var remaining = prefix ? key.substr(prefix.length + 1) : key;
        var parts = remaining.split('.');
        var current = parts[0] || undefined;
        var next = parts[1] || undefined;
        if(remaining.startsWith("[")) {
            // Handle Array
            if(!target || !Array.isArray(target)) {
                target = [];
            }
            // Get index
            var index = parseInt((remaining.substr(1).split("]"))[0]);
            // Fill array until index
            for(var i = 0; i <= index; i ++) {
                if(!target[i]) {
                    target[i] = undefined;
                }
            }
            target[index] = handle(list, target[index] || {}, prefix + (prefix ? '.' : '') + current);
        } else if(next) {
            target[current] = handle(list, target[current] || {}, prefix + (prefix ? '.' : '') + current);
        } else if(!current) {
            target = list[key];
            delete list[key];
        } else {
            target[current] = list[key];
            delete list[key];
        }
    }
    return target;
}

module.exports = function parse(list) {
    // place dot in front of []
    var a = {};
    for(var m in list) {
        a[m.replace(/\[/g,'.[')]=list[m]
    }
    
    // Start parsing
    return handle(a, {});
}