import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export const getAllRecords = async () => {
    const records = await supabase.from('study-record').select('*');
    return records.data;
};

export const addRecord = async (title, time) => {
    const {data, error} = await supabase.from('study-record').insert([
        {
            title: title,
            time: time
        }
    ])
    .select();
}

export const deleteRecord = async (id) => {
    const {data, error} = await supabase.from('study-record').delete().eq('id', id)
}