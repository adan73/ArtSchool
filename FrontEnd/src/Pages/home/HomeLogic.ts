import { useState } from "react";

function useHomeLogic() {
  const [imageOpen, setImageOpen] = useState(false);

  const openImage = () => {
    setImageOpen(true);
  };

  const closeImage = () => {
    setImageOpen(false);
  };

  return {
    imageOpen,
    openImage,
    closeImage,
  };
}

export default useHomeLogic;