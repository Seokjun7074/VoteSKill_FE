import useModal from 'hooks/useModal';
import Modal from './Modal';

function CollectVote({ isVoteModal }) {
  return <div>{isVoteModal && <Modal id={'CollectVote'}></Modal>}</div>;
}

export default CollectVote;
