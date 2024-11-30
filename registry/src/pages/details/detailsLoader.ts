import { getPackage } from '../../api/queries/getPackage';
import type { Params } from 'react-router-dom';
import type { PackageDetails } from '../../api/types/packageDetails';

interface LoaderArgs {
  params: Params;
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({
  params,
}: LoaderArgs): Promise<DetailsLoaderResult> {
  // the 'name' string below is coming from the createBrowserRouter in App.tsx in the children element for Details page:
  // path: '/packages/:name',
  // Using ':' before a string adds that string as a key in the params with the value being the string the user typed in that path
  const { name } = params;

  if (!name) {
    throw new Error('Name must be provided');
  }
  const details = await getPackage(name);
  return {
    details,
  };
}
