import axios from "axios";
import useSWR, { KeyedMutator } from "swr";
// const API_URL = '/api/proxy?endpoint=/api/events?category'
const API_URL_CATEGORY = 'http://localhost:1337/api/events?category'
const API_URL_EVENT = 'http://localhost:1337/api/events'
export interface Events {
  id: number
  documentId: string
  category: string
  images: ImagesEvent[]
}

export interface ImagesEvent {
  id: number
  documentId: string
  url: string
}

interface EventResults{
  dataEvents?:Events[]
  isLoadingEvent:boolean
  isErrorEvent:any
  mutateEvent:KeyedMutator<Events[]>
}

interface EventResultsCategory{
  dataEventsCategory?:Events[]
  isLoadingEventCategory:boolean
  isErrorEventCategory:any
  mutateEventCategory:KeyedMutator<Events[]>
}

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;  // Axios otomatis mengurai JSON
  } catch (error) {
    console.log(error);
    
    // Tangani error sesuai kebutuhan
    throw new Error('Failed to fetch');
  }
};
export const useAllGallery = (shouldFetch:boolean): EventResults => {
  
  const { data, isLoading, error, mutate } = useSWR<Events[]>(
    // shouldFetch ? '/api/proxy?endpoint=/api/events' : null,
    shouldFetch ? API_URL_EVENT : null,
    fetcher,
    {
     
    },
  )
  return {
    dataEvents:data,
    isLoadingEvent: error,
    isErrorEvent: isLoading,
    mutateEvent:mutate
  }
}

export const useAllGalleryCategory = (shouldFetch:boolean,category?:string): EventResultsCategory => {
  
  const { data, isLoading, error, mutate } = useSWR<Events[]>(
    shouldFetch ? `${API_URL_CATEGORY}=${category}` : null,

    fetcher,
    {
     
    },
  )
  return {
    dataEventsCategory:data,
    isLoadingEventCategory: error,
    isErrorEventCategory: isLoading,
    mutateEventCategory:mutate
  }
}