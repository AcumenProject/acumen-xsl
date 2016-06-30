var xsltproc = require('xsltproc')

exports.etd = {
    etd: function(test){
        'use strict';
        test.expect(1);
        var xsl = 'etd/etd_meta_tags.xsl';
        var xml = 'etd/test/xml/etd.xml';
        var xslt = xsltproc.transform(xsl, xml);

        xslt.on('exit', function (code) {
            test.equal(code, 0, 'xsltproc process exited with code ' + code);
            test.done();
        });
    }
};