-- =========================================================
-- SAN3AT YAD
-- Database Schema
-- Version: 1.0
-- Database: PostgreSQL (Supabase)
-- =========================================================

-- =========================================================
-- CITIES
-- =========================================================

CREATE TABLE cities (

    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name_ar VARCHAR(100) NOT NULL UNIQUE,

    slug VARCHAR(100) NOT NULL UNIQUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);

-- =========================================================
-- PROFESSIONS
-- =========================================================

CREATE TABLE professions (

    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    name_ar VARCHAR(100) NOT NULL UNIQUE,

    slug VARCHAR(100) NOT NULL UNIQUE,

    icon VARCHAR(100),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);

-- =========================================================
-- USERS
-- =========================================================

CREATE TABLE users (

    id UUID PRIMARY KEY,

    full_name VARCHAR(150) NOT NULL,

    phone_number VARCHAR(30) UNIQUE NOT NULL,

    account_type VARCHAR(20) NOT NULL
        CHECK (account_type IN ('customer','artisan','admin')),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()

);

-- =========================================================
-- ARTISANS
-- =========================================================

CREATE TABLE artisans (

    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id UUID UNIQUE,

    full_name VARCHAR(150) NOT NULL,

    phone_number VARCHAR(30) NOT NULL UNIQUE,

    profession VARCHAR(100) NOT NULL,

    profession_2 VARCHAR(100),

    profession_3 VARCHAR(100),

    region VARCHAR(100) NOT NULL,

    rating NUMERIC(2,1) DEFAULT 0,

    verification_status BOOLEAN DEFAULT FALSE,

    account_type VARCHAR(20)
        DEFAULT 'artisan',

    status VARCHAR(20)
        DEFAULT 'pending'
        CHECK (
            status IN (
                'pending',
                'approved',
                'rejected'
            )
        ),

    bio TEXT,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE SET NULL

);

-- =========================================================
-- RATINGS
-- =========================================================

CREATE TABLE ratings (

    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    artisan_id BIGINT
