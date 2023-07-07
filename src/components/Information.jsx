import { textError } from "../config/constants"

export const Information = ({ error, isLoading }) => {

  return (
    <>
    {error && <div className="information">{textError}</div>}
    {isLoading && <div className="spinner"></div>}
    </>
  )
}