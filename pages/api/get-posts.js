import { supabase } from '../../services/supabaseClient'

const getData = async(req, res) => {
    const { data } = await supabase
        .from('feed')
        .select('*')
        .order('created_at', { ascending:false })
    
    res.status(200).json({ data:data })
}

export default getData