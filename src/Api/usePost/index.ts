import { useQuery } from 'react-query'
import { DataService } from "@Services/DataService";

const usePost = (id: number) => {
    return useQuery(['post', id], () => DataService.getPost(id))
}

export { usePost }
