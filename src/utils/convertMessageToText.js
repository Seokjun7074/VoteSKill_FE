const convertMessageToText = (MessageList) => {
  if (MessageList.length < 1) return '아무일도 일어나지 않았습니다.';
  return MessageList.join('\n');
};
export default convertMessageToText;
