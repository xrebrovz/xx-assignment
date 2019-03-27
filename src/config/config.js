import { isIOS } from 'utils/platform'


let domainURL = isIOS() ? 'http://localhost:7777' : 'http://10.0.2.2:7777'

module.exports = {
    domainURL: domainURL,
};