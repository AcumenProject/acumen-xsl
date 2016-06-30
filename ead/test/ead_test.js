var xsltproc = require('xsltproc')

exports.ead = {
    ead: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'ead/ead.xsl';
        var xml = 'ead/test/xml/ead.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    ead_oai: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'ead/ead_oai.xsl';
        var xml = 'ead/test/xml/ead.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    ead_to_solr: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'ead/ead_to_solr.xsl';
        var xml = 'ead/test/xml/ead.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    }
};