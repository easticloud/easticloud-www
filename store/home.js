export const state = () => ({
    kv_mode: 'blue',
    // kv_mode: 'dark',
});

export const mutations = {
    setKVMode(state,value) {
        state.kv_mode = value;
    },
};
