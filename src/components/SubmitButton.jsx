import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
const { pending } = useFormStatus();
  return (
    <button 
      type="submit"
      className="text-dark bg-gradient-to-r from-primary to bg-cyan-400 hover:scale-110 disabled:hover:scale-100 disabled:bg-opacity-75 px-4 py-2 flex justify-center rounded gap-2 group items-center"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-secondary"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  )
}

export default SubmitButton