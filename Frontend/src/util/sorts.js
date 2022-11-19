export const alphaSort = (companiesState, setCompanies) => {
      [...companiesState].sort((a, b) => a.name.localeCompare(b.name))
      setCompanies(companiesState)
  };

export const lowSort = (companiesState, setCompanies) => {

      [...companiesState].sort((a, b) => (a.amount > b.amount ? 1 : -1))
      setCompanies(companiesState)
  };
export const highSort = (companiesState, setCompanies) => {
      [...companiesState]
        .sort((a, b) => (a.amount > b.amount ? 1 : -1))
        .reverse()
        setCompanies(companiesState)
  };