local overseer = require('overseer')

overseer.register_template({
  name = 'dev',
  builder = function()
    return {
      name = 'dev',
      cmd = 'source .env && node install.mjs',
      components = {
        { 'restart_on_save', paths = { 'index.ts', }, },
        'default',
      },
    }
  end,
})
