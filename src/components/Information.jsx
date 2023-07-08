import { TEXT_ERROR } from "../config/constants"

export const Information = ({ error, isLoading }) => {

  return (
    <>
    {error && <div className="information">{TEXT_ERROR}</div>}
    {isLoading && <div className="spinner"></div>}
    </>
  )
}