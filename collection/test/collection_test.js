var xsltproc = require('xsltproc')

exports.collection = {
    collection: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'collection/collection.xsl';
        var xml = 'collection/test/xml/collection.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    collection_oai: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'collection/collection_oai.xsl';
        var xml = 'collection/test/xml/collection.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    },
    collection_to_solr: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'collection/collection_to_solr.xsl';
        var xml = 'collection/test/xml/collection.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    }
};