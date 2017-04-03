
// classes
import DidiConsole from './core/core.js';
import DidiConsolePlugin from './lib/plugin.js';
// built-in tabs
import DidiConsoleDefaultTab from './log/default.js';
import DidiConsoleSystemTab from './log/system.js';
import DidiConsoleNetworkTab from './network/network.js';

// here we go
const didiConsole = new DidiConsole();

const defaultTab = new DidiConsoleDefaultTab('default', 'Log');
didiConsole.addPlugin(defaultTab);

const systemTab = new DidiConsoleSystemTab('system', 'System');
didiConsole.addPlugin(systemTab);

const networkTab = new DidiConsoleNetworkTab('network', 'Network');
didiConsole.addPlugin(networkTab);

// export
didiConsole.DidiConsolePlugin = DidiConsolePlugin;
export default didiConsole;

