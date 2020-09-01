const isCI = require('is-ci');
const dockerCompose = require('docker-compose');

module.exports = async () => {
  /*  #region ️️️⚙️ Tear DB down */
  if (isCI) {
    dockerCompose.down();
  }

  // 😕 TODO: tear data down!

  /* #endregion */
};
