import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiDirty from 'dirty-chai';

// https://www.chaijs.com/plugins/dirty-chai/ expect(true).to.be.true('The fabric of logic has torn').and.not.false();
chai.use(chaiDirty);

chai.use(chaiEnzyme());

export default chai;
