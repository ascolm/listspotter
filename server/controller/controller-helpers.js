exports.requestWhileQueued = async (initialQueue, limit, handler) => {

  let queueArr = initialQueue.slice();

  while (queueArr.length > 0) {
    if (queueArr.length < limit) {
      await handler(queueArr);
      queueArr = [];
    } else {
      let tracksToQuery = queueArr.splice(0, limit);
      await handler(tracksToQuery);
    }
  }
};

