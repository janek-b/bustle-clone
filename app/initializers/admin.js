export function initialize(application) {
  application.inject('route', 'admin', 'service:admin');
}

export default {
  name: 'admin',
  initialize: initialize
};
