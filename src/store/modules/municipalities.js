import _base from './_base-module';
import Municipality from '@/classes/geo/Municipality';

const Model = Municipality;

const state = {
    all: [],
    current: null
};

const getters = {
    ..._base.getters
};

const actions = {
    create(context, item){
        return _base.actions.create(context, item);
    },
    update(context, item){
        return _base.actions.update(context, item);
    },
    delete(context, item){
        return _base.actions.delete(context, item);
    }
};

const mutations = {
    init(state, set) {
        return _base.mutations.init(state, set, Model);
    },
    setCurrent(state, item) {
        return _base.mutations.setCurrent(state, item)
    },
    unsetCurrent(state) {
        return _base.mutations.unsetCurrent(state)
    },
    create(state, item) {
        return _base.mutations.create(state, item, Model);
    },
    update(state, item) {
        return _base.mutations.update(state, item, Model);
    },
    delete(state, item) {
        return _base.mutations.delete(state, item);
    },
    updateProperty(state, payload) {
        return _base.mutations.updateProperty(state, payload);
    },
    reset(state) {
        return _base.mutations.reset(state);
    },
    updatePropertyOfItem(state, payload) {
        _base.mutations.updatePropertyOfItem(state, payload.item, payload.property, payload.value);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}