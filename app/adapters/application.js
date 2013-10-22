// var FixtureAdapter = DS.FixtureAdapter.extend();
// export default FixtureAdapter;

var LocalStorageAdapter = DS.LSAdapter.extend({
	namespace: 'todos-emberjs'
});

export default LocalStorageAdapter;