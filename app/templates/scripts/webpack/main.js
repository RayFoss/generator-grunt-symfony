import log from 'loglevel';
import $ from 'jquery'; <% if (useBootstrap) { %>
import 'bootstrap'; <% } else if (useUikit) { %>
import UI from 'uikit/js/uikit';<% } else if (useFoundation) { %>
import 'foundation';<% } %>

/* global picturefill */
import 'picturefill';
picturefill();

log.setLevel(0);
log.debug('\'Allo \'Allo');
log.debug('Running jQuery:',$().jquery);<% if (useBootstrap) { %>
log.debug('Running Bootstrap:',!!$.fn.scrollspy? '~3.3.0' : false);<% } else if (useUikit) { %>
log.debug('Running UIkit:',UI.version);<% } else if (useFoundation) { %>
/* global Foundation */
log.debug('Running Foundation:',Foundation.version);<% } %>
