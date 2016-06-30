var xsltproc = require('xsltproc');

exports.mods = {
    mods: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'mods/mods.xsl';
        var xml = 'mods/test/xml/mods.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    mods_oai: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'mods/mods_oai.xsl';
        var xml = 'mods/test/xml/mods.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    mods_oai_aserl: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'mods/mods_oai_aserl.xsl';
        var xml = 'mods/test/xml/mods.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    mods_oai_eds: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'mods/mods_oai_eds.xsl';
        var xml = 'mods/test/xml/mods.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    mods_to_solr: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'mods/mods_to_solr.xsl';
        var xml = 'mods/test/xml/mods.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.stderr.on('data', function (data) {
            console.log('xsltproc stderr: ' + data);
            test.done();
        });

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    }
};