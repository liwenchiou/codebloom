// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// 從 Vite 環境變數讀取 URL 和 KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// 建立單一 Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey)
