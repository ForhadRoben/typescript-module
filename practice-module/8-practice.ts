{
  /**
   * promise
   */
  type Something = { name: string };
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { name: "forhad" };
      //   const data = null;
      if (data) {
        resolve(data);
      } else {
        reject("failed to data");
      }
    });
  };
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
  };
  //   createPromise()
  showData()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
